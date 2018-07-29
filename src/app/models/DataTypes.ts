export interface Class {
  ID: string;
  name : string;
  studyGroupIDS?: string[];
}

export interface StudyGroup {
  ID: string;
  ClassID : string;
  studyGroupName : string;
  description : string;
  usersList : string[];
  userMessageList : string[];
}

export interface User {
  username : string;
  email : string;
  groupIDs: string[];
}
