import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';

class LocationRDO {
  @Expose()
    latitude: number;

  @Expose()
    longitude: number;
}

export class OfferRDO {
  @Expose()
  public offerName: string;

  @Expose()
  public description: string;

  @Expose()
  public publicationDate: string;

  @Expose()
  public city: string;

  @Expose()
  public previewImage: string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: string;

  @Expose()
  public roomsNumber: number;

  @Expose()
  public guests: number;

  @Expose()
  public price: number;

  @Expose()
  public services: string[];

  @Expose({ name: 'userId' })
  @Type(() => UserRdo)
  public user: UserRdo;

  @Expose()
  public commentCount: number;

  @Expose()
  @Type(() => LocationRDO)
  public location: LocationRDO;
}
