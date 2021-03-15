export class University {
  constructor(public Name: string, public ShortName: string){}
}

export class UniversityResult{
  Universities: University[];
  IsSuccess: boolean;
  Message: string;
}




