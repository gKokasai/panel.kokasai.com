import {
  Link as MuiLink,
  LinkProps as MuiLinkActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type LinkProps = MuiLinkActionProps;

const Link: FC<LinkProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiLink {...props} />
);

export default Link;
