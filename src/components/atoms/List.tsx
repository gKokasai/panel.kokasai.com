import {
  List as MuiList,
  ListProps as MuiListActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type ListProps = MuiListActionProps;

const List: FC<ListProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiList {...props} />
);

export default List;
