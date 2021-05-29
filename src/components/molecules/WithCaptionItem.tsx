import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import Typography from "../atoms/Typography";

export type WithCaptionItemProps = {
  captionVariant?: Variant;
  caption: string;
};

const WithCaptionItemStyle = makeStyles((theme: Theme) =>
  createStyles({
    space: {
      padding: `0 ${theme.spacing(2)}px`,
    },
  })
);

const WithCaptionItem: FC<WithCaptionItemProps> = (props): JSX.Element => {
  const { captionVariant, caption, children } = props;
  const classes = WithCaptionItemStyle();
  return (
    <>
      <Typography variant={captionVariant || "caption"}>{caption}</Typography>
      <div className={classes.space}>{children}</div>
    </>
  );
};

export default WithCaptionItem;
