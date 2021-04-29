import * as icons from '@material-ui/icons';
import React from 'react';

export type Page = {
  href: string
  name: string
  icon: JSX.Element
};

const page = (
  href: string,
  name: string,
  icon: JSX.Element,
): Page => ({ href, name, icon });

export const Pages = {
  index: page('/', 'トップ', <icons.Home />),
  document: page('/document', '資料', <icons.LibraryBooks />),
};
