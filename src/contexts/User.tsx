import { FormList, GetGroupFormResponse } from "../api/dataType";

export type User = {
  documentList?: string[];
  groupList?: string[];
  formList?: FormList;
  form?: { [formName: string]: GetGroupFormResponse };
};
