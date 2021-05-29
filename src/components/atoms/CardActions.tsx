import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type CardActionsProps = MuiCardActionProps;

const CardActions: FC<CardActionsProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCardActions {...props} />
);

export default CardActions;
