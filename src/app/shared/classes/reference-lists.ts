
export class ListItemModel {
  Value: number;
  DisplayName: string;  
  Selected: boolean;
}

export class ListModel {
  Name: string;  
  Items: Array<ListItemModel>;
}

export class ListResult {
  IsSuccess: boolean;
  Data: ListModel;
  Message: string;
}

export class ReferenceList
{
    Name: string;
    Namespace: string;
    Id: number;
}

export class ReferenceListItem
{
    Id: number;
    Name: string;
    Value: number;
    OrderIndex: number;
}


