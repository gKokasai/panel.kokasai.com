import { GetGroupFormResponse } from '../api/dataType';

export type FormListType = {
  [id: string]: {
    name: string,
    update: string,
    status: number,
  }
};

export type User = {
  documentList?: string[];
  groupList?: string[];
  formList?: FormListType;
  form?: {[formName: string]: GetGroupFormResponse}
}
