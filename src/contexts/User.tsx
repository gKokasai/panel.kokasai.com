import { GetGroupFormResponse } from '../api/dataType';

export type User = {
  documentList?: string[];
  groupList?: string[];
  formList?: {
    [id: string]: {
      name: string,
      update: string,
      status: number,
    }
  };
  form?: {[formName: string]: GetGroupFormResponse}
}
