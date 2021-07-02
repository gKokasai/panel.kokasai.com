import * as icons from "@material-ui/icons";
import React from "react";

export const Pages = {
  login: { href: "/login" },
  index: { name: "トップ", href: "/" },
  document: { name: "資料", href: "/document/list" },
  documentName: { name: "資料", href: "/document" },
  group: { name: "グループ", href: "/group" },
  form: { name: "フォーム", href: "/form" },
  groupName: {
    name: "グループ",
    href: (groupName: string): string => `/group/${groupName}`,
  },
  groupNameForm: {
    name: "フォーム",
    href: (groupName: string): string => `/group/${groupName}/form`,
  },
  groupNameFormName: {
    name: "フォーム",
    href: (groupName: string, formName: string): string =>
      `/group/${groupName}/form/${formName}`,
  },
  groupNameMember: {
    name: "メンバー",
    href: (groupName: string): string => `/group/${groupName}/member`,
  },
};

export const SideBar = [
  { page: Pages.index, icon: <icons.Home /> },
  { page: Pages.document, icon: <icons.LibraryBooks /> },
  { page: Pages.form, icon: <icons.FormatAlignRight /> },
  { page: Pages.group, icon: <icons.Group /> },
];
