export class Class {
  classID : string;
  className : string;
  studyGroupIDS: string[];
}

export class StudyGroup {
  ID : string;
  studyGroupName : string;
  className : string;
  description : string;
  usersList : string[];
  userMessageList : string[];
}

export class User {
  username : string;
  email : string;
  groupIDs: string[];
}
