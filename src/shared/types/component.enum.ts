export const Component = {
  RestApplication: Symbol('RestApplication'),
  Logger: Symbol('Logger'),
  Config: Symbol('Config'),
  DatabaseClient: Symbol('DatabaseClient'),
  UserService: Symbol('UserService'),
  UserModel: Symbol('UserModel'),
  UserController: Symbol('UserController'),
  OfferService: Symbol('OfferService'),
  OfferModel: Symbol('OfferModel'),
  OfferController: Symbol('OfferController'),
  CommentService: Symbol('CommentService'),
  CommentModel: Symbol('CommentModel'),
  CommentController: Symbol('CommentController'),
} as const;
