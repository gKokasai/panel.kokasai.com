import { FormList, GetGroupFormResponse, UserList } from "../api/dataType";

export type User = {
  documentList?: string[];
  formList?: {
    [groupName: string]: FormList;
  };
  groupList?: string[];
  group?: {
    [groupName: string]: {
      form?: {
        [formName: string]: GetGroupFormResponse;
      };
      formList?: FormList;
      userList?: UserList;
    };
  };
};
