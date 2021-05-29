import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type ListItemTextProps = MuiListItemTextActionProps;

const ListItemText: FC<ListItemTextProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiListItemText {...props} />
);

export default ListItemText;
