import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class CommentRDO {
  @Expose()
    text: string;

  @Expose({ name: 'createdAt'})
    publicationDate: string;

  @Expose()
    rating: number;

  @Expose({ name: 'userId' })
  @Type(() => UserRdo)
  public user: UserRdo;
}
