export class Experience {
  Id?: number;
  CompanyName: string;  //if company exists on db, this will be an autocomplete and selected entry will return id of existing company
  Position: string;
  StartDate: Date;
  EndDate: Date;
  JobDetails: string;
  //TechStack: Array<string>;
  IsCurrentEmployer: boolean;
  HideFromEmployer: boolean;
  TotalYears: string;
  Candidate_Id: number;
}

export class Qualification {
  Id: number;
  InstitutionName: string;  //if company exists on db, this will be an autocomplete and selected entry will return id of existing company
  QualificationObtained: string;
  Specialisation: string;
  StartDate: Date;
  EndDate: Date;
  roleDescription: string;
  CurrentlStudyHere: boolean;
  Candidate_Id: number;
}

export class QualificationResult {
  IsSuccess: boolean;
  Data: Qualification;
  Message: string;
}

export class ExperienceResult {
  IsSuccess: boolean;
  Data: Experience;
  Message: string;
}

export class Skill {
  Name: string;
  Type: number;
  Level: number;
  LevelName: string;
  Candidate_Id: number;
  Id?: number;
}
export class SkillResult {
  IsSuccess: boolean;
  Data: Skill;
  Message: string;
}

export class Language {
  NameLkp: number;
  ProficiencyLkp: number;
  Name: string;
  Proficiency: string;
  Candidate_Id: number;
  Id?: number;
}

export class LanguageResult {
  IsSuccess: boolean;
  Data: Language;
  Message: string;
}
