import { Position} from './position';
import { Area} from './areas';

export class Person {
  Id: number;
  FirstName: string;
  MiddleNames: string;
  FastName: string;
  Initials: string;
  BirthDate: string;
  EmailAddress: string;
  CellPhoneNumber: string;
  WhatsappNumber: string;
  SocialMedia: SocialMediaLink;
}

export class RegisterUser {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  FirstName: string;
  UserType: string;
}

export class LoginUser {
  username: string;
  password: string;
  grant_type: string;
}

export class UserToken {
  access_token: string;
  token_type: string;
  expires_in: string;
  userName: string;
  issued: Date;
  expires: Date;
}

export class Candidate extends Person{
  constructor(init?: Partial<Candidate>) {
    super()
    Object.assign(this, init);
}
  ReasonsForUsingUs: string;
  TypeOfWork: string;
  WorkBenefits: string;
  Citizenship: string;
  Availability: string;
  PreferableWorkLocations: string;
  CurrentSalary: number;
  ExpectedSalary: number;
  CurrentLocation: Area;
  CurrentPosition: Position;
  ReasonsForUsingUsLkp: number;
  PreferableWorkLocationsLkp: number;
  TypeOfWorkLkp: number;
  CitizenshipLkp: number;
  WorkBenefitsLkp: number;
  AvailabityLkp: number;
  GoogleAddress: string;
  About: string;
  WizardComplete: boolean
}

export class Employer extends Person{
}

export class CandidateResult {
  IsSuccess: boolean;
  Data: Candidate;
  Message: string;
}

export class EmployerResult {
  IsSuccess: boolean;
  Data: Employer;
  Message: string;
}

export class Result {
  IsSuccess: boolean;
  Data: any;
  Message: string;
}

export class SocialMediaLink{
   Id: number;
   LinkedIn: string;
   StackOverflow : string;
   GitHub : string;
   Website : string;
   Facebook: string;
   Twitter: string;
   Youtube: string;

}
