export interface ClassData {
  ID: string;
  name : string;
  studyGroupIDs?: {[studyGroupID: string] : boolean};
}

export interface StudyGroup {
  ID: string;
  ClassID? : string;
  name : string;
  description? : string;
  usersList? : string[];
  userMessageList? : string[];
}

export interface User {
  username : string;
  email : string;
  groupIDs: string[];
}
