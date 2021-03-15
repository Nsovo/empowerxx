export class Area {
  Id: number;
  Name: string;  
  ShortName: string;
  Discriminator: string;
  ParentArea: Area;
  ParentArea_Id: number;
}

export class AreaResult {
  IsSuccess: boolean;
  Data: Area;
  Message: string;
}



