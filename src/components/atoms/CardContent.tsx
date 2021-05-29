import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type CardContentProps = MuiCardContentProps;

const CardContent: FC<CardContentProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCardContent {...props} />
);

export default CardContent;
