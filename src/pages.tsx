import * as icons from '@material-ui/icons';
import React from 'react';

export type Page = {
  href: string;
  name: string;
}

const page = (
  href: string,
  name: string,
): Page => ({ href, name });

export const Pages = {
  index: page('/', 'トップ'),
  document: page('/document', '資料'),
  group: page('/group', 'グループ'),
  empty: page('', ''),
};

export const SideBar = [
  { page: Pages.index, icon: <icons.Home /> },
  { page: Pages.document, icon: <icons.LibraryBooks /> },
  { page: Pages.group, icon: <icons.Group /> },
];
