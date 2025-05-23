import { injectable, inject } from 'inversify';
import { StatusCodes } from 'http-status-codes';
import { Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import { Controller } from './controller.interface.js';
import { Logger } from '../../logger/index.js';
import { Route } from '../types/index.js';
import { PathTransformer } from '../transform/path-transformer.js';
import { Component } from '../../../types/index.js';

@injectable()
export abstract class BaseController implements Controller {
  private readonly DEFAULT_CONTENT_TYPE = 'application/json';
  private readonly _router: Router;

  @inject(Component.PathTransformer) private readonly pathTransformer: PathTransformer;

  constructor(protected readonly logger: Logger) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public addRoute(route: Route) {
    const wrapperAsyncHandler = asyncHandler(route.handler.bind(this));
    const middlewareHandlers = route.middlewares?.map((item) => asyncHandler(item.execute.bind(item))
    );

    const allHandlers = middlewareHandlers ? [...middlewareHandlers, wrapperAsyncHandler] : wrapperAsyncHandler;

    this._router[route.method](route.path, allHandlers);
    this.logger.info(`Route registered: ${route.method.toUpperCase()} ${route.path}`);
  }

  public send<T>(res: Response, statusCode: number, data: T) {
    const modifiedData = this.pathTransformer.execute(data as Record<string, unknown>);
    res
      .type(this.DEFAULT_CONTENT_TYPE)
      .status(statusCode)
      .json(modifiedData);
  }

  public ok<T>(res: Response, data: T) {
    this.send(res, StatusCodes.OK, data);
  }

  public created<T>(res: Response, data: T) {
    this.send(res, StatusCodes.CREATED, data);
  }

  public noContent<T>(res: Response, data: T) {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }
}
