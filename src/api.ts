import { Base64 } from 'js-base64';
import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

export const URL = 'https://api.kokasai.com';

/**
 * ログイン認証されているか取得する。
 * [GET /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-auth)
 * @param cookie セッションのCookie
 */
export const getAuth = (cookie: string): Promise<AxiosResponse<never>> => axios.get(`${URL}/auth`, { headers: { cookie } });

/**
 * ログイン認証する。
 * [POST /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-auth)
 * @param id 学籍番号
 * @param pass パスワード
 */
export const postAuth = (id?: string, pass?: string): Promise<AxiosResponse<{
  auth: string
}>> => {
  const header:{
        [key: string]: string | boolean ;
    } = {
      Authorization: `Basic ${Base64.encode(`${id}:${pass}`)}`,
    };

  return axios.post(`${URL}/auth`, null, { headers: header });
};

/**
 * ログイン用のパスワードを発行する。
 * [POST /login](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-login)
 * @param id ログインする学籍番号
 */
export const postLogin = (id?: string): Promise<AxiosResponse<never>> => axios.post(`${URL}/login`, { id });

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
export const getFile = (path: string): Promise<AxiosResponse> => axios.get(`${URL}/file/${path}`);

/**
 * ドキュメントファイルを取得する。
 * [GET /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-documentname)
 * @param documentName 取得するドキュメントの名前
 */
export const getDocument = (documentName: string): Promise<AxiosResponse> => axios.get(`${URL}/document/${documentName}`);

/**
 * グループに紐づけられているドキュメントファイル一覧を取得する。
 * [GET /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupdocumentlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupDocumentList = (groupName: string): Promise<AxiosResponse<{
  document: string[]
}>> => axios.get(`${URL}/group/document/list/${groupName}`);

/**
 * グループに紐づけられているドキュメントファイル一覧を変更する。
 * [POST /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupdocumentlistname)
 * @param groupName 変更するグループの名前
 * @param list 変更後の一覧
 */
export const postGroupDocumentList = (groupName: string, list: {
  document: string[]
}): Promise<AxiosResponse<never>> => axios.post(`${URL}/group/document/list/${groupName}`, list);

/**
 * グループに属するユーザー一覧を取得する。
 * [GET /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupuserlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupUserList = (groupName: string): Promise<AxiosResponse<{
  owner: string[],
  member: string[]
}>> => axios.get(`${URL}/group/user/list/${groupName}`);

/**
 * グループに属するユーザー一覧を変更する。
 * [POST /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupuserlistname)
 * @param groupName 変更するグループの名前
 * @param list 変更後の一覧
 */
export const postGroupUserList = (groupName: string, list: {
  owner: string[],
  member: string[]
}): Promise<AxiosResponse<never>> => axios.post(`${URL}/group/user/list/${groupName}`, list);

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
