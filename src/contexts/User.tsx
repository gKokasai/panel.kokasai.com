import { FormList, GetGroupFormResponse } from "../api/dataType";

export type User = {
  documentList?: string[];
  groupList?: string[];
  group?: {
    [groupName: string]: {
      form?: {
        [formName: string]: GetGroupFormResponse;
      };
      formList?: FormList;
    };
  };
};
