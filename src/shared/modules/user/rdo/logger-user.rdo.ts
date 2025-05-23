import { Expose } from 'class-transformer';

export class LoggedUserRDO {
  @Expose()
  public token: string;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public avatarPath: string;

  @Expose()
  public userType: 'standard' | 'pro';
}
