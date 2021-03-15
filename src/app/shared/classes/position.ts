export class Position {
  Id: number;
  Name: string;  
  ShortName: string;
  Discriminator: string;
}

export class PositionResult {
  IsSuccess: boolean;
  Data: Position;
  Message: string;
}

export class PreferredPosition{
  Position: Position;
  Candidate_Id: number
}

export class PreferredPositionResult {
  IsSuccess: boolean;
  Data: PreferredPosition;
  Message: string;
}



