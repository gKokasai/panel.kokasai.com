import { Base64 } from 'js-base64';
import axios, { AxiosResponse } from 'axios';
import { FormDefineType, FormSaveType, FormSaveValue } from './dataType';

axios.defaults.withCredentials = true;

export const URL = process.env.API_URL;

/**
 * ログイン認証されているか取得する。
 * [GET /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-auth)
 */
export const getAuth = (): Promise<AxiosResponse<never>> => axios.get(`${URL}/auth`);

/**
 * ログイン認証する。
 * [POST /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-auth)
 * @param id 学籍番号
 * @param pass パスワード
 */
export const postAuth = (
  id?: string,
  pass?: string,
): Promise<AxiosResponse> => {
  const headers: {
    [key: string]: string | boolean ;
  } = {
    Authorization: `Basic ${Base64.encode(`${id}:${pass}`)}`,
  };
  return axios.post(`${URL}/auth`, null, { headers });
};

/**
 * ログイン用のパスワードを発行する。
 * [POST /login](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-login)
 * @param id ログインする学籍番号
 */
export const postLogin = (
  id?: string,
): Promise<AxiosResponse<never>> => axios.post(`${URL}/login`, { id });

/**
 * ログアウトする。
 * [POST /logout](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-logout)
 */
export const postLogout = (): Promise<AxiosResponse<never>> => axios.post(`${URL}/logout`);

/**
 * 公開されているファイルを取得する。
 * [GET /file](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-filepath)
 * @param path 取得するファイルのパス
 */
export const getFile = (
  path: string,
): Promise<AxiosResponse> => axios.get(`${URL}/file/${path}`);

/**
 * ドキュメントファイルを取得する。
 * [GET /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-documentname)
 * @param documentName 取得するドキュメントの名前
 */
export const getDocument = (
  documentName: string,
): Promise<AxiosResponse> => axios.get(`${URL}/document/${documentName}`);

/**
 * ドキュメントファイルを変更する。
 * [POST /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-documentname)
 * @param documentName 変更するドキュメントの名前
 * @param document 変更するドキュメントの内容
 */
export const postDocument = (
  documentName: string,
  document: File,
): Promise<AxiosResponse<never>> => {
  const formData = new FormData();
  formData.append('file', document);
  const headers = {
    'content-type': 'multipart/form-data',
  };
  return axios.post(`${URL}/document/${documentName}`, formData, { headers });
};

/**
 * グループに紐づけられているドキュメントファイル一覧を取得する。
 * [GET /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupdocumentlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupDocumentList = (
  groupName: string,
): Promise<AxiosResponse<{
  document: string[]
}>> => axios.get(`${URL}/group/document/list/${groupName}`);

/**
 * グループに紐づけられているドキュメントファイル一覧を変更する。
 * [POST /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupdocumentlistname)
 * @param groupName 変更するグループの名前
 * @param list 変更後の一覧
 */
export const postGroupDocumentList = (
  groupName: string,
  list: {
    document: string[]
  },
): Promise<AxiosResponse<never>> => axios.post(`${URL}/group/document/list/${groupName}`, list);

/**
 * グループに属するユーザー一覧を取得する。
 * [GET /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupuserlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupUserList = (
  groupName: string,
): Promise<AxiosResponse<{
  owner: string[],
  member: string[]
}>> => axios.get(`${URL}/group/user/list/${groupName}`);

/**
 * グループに属するユーザー一覧を変更する。
 * [POST /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupuserlistname)
 * @param groupName 変更するグループの名前
 * @param list 変更後の一覧
 */
export const postGroupUserList = (
  groupName: string,
  list: {
    owner: string[],
    member: string[]
  },
): Promise<AxiosResponse<never>> => axios.post(`${URL}/group/user/list/${groupName}`, list);

/**
 * ユーザーがアクセスできるドキュメントファイルの一覧を取得する。
 * [GET /user/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-userdocumentlist)
 */
export const getUserDocumentList = (): Promise<AxiosResponse<{
  document: string[]
}>> => axios.get(`${URL}/user/document/list`);

/**
 * ユーザーが属しているグループ一覧を取得する。
 * [GET /user/group/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-usergrouplist)
 */
export const getUserGroupList = (): Promise<AxiosResponse<{
  group: string[]
}>> => axios.get(`${URL}/user/group/list`);

/**
 * 指定グループのフォーム一覧を取得する
 * [GET /group/form/list/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformlistname)
 */
export const getGroupFormList = (): Promise<AxiosResponse<{
  form: {
    [id: string]: {
      name: string,
      update: string,
      status: number,
    }
  }
}>> => axios.get(`${URL}/group/form/list`);

/**
 * 指定グループのフォームの内容を取得する
 * [GET /group/form/get/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformgetgroupnameformname)
 * @param groupName 取得するグループの名前
 * @param formName 取得するフォームの名前
 */
export const getGroupForm = (
  groupName: string,
  formName: string,
): Promise<AxiosResponse<{
  name: string,
  description: string,
  receive: string,
  limit: string,
  update: string,
  values: {
    [id: string]: {
      name: string,
      description: string,
      type: FormDefineType,
      value?: FormSaveValue,
    }
  },
  status: number,
  comment: string,
}>> => axios.get(`${URL}/group/form/get/${groupName}/${formName}`);

/** 指定グループのフォーム送信を行う
 * [POST /group/form/submit/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupformsubmitgroupnameformname)
 * @param groupName 送信するフォームのグループの名前
 * @param formName 送信するフォームの名前
 * @param values フォームの値一覧
 */
export const postGroupFormSubmit = (
  groupName: string,
  formName: string,
  values: {
    [id: number]: FormSaveType
  },
): Promise<AxiosResponse<string>> => axios.post(`${URL}/group/form/submit/${groupName}/${formName}`, { values });
