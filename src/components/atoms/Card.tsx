import {
  Card as MuiCard,
  CardProps as MuiCardActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type CardProps = MuiCardActionProps;

const Card: FC<CardProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCard {...props} />
);

export default Card;
