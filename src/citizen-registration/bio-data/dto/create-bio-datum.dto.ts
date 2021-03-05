export class CreateBioDatumDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly nationality?: string;
    readonly dateOfBirth?: Date;
    readonly countryofbirth?: string;
    readonly stateofbirth?: string;
    readonly townofbirth?: string;
    readonly residentialaddress?: string;
    readonly profession?: string;
    readonly isActive?: boolean;
  }
  