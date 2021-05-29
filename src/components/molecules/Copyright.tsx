import React, { FC } from "react";
import Typography, { TypographyProps } from "../atoms/Typography";

export type CopyrightProps = TypographyProps;

const Copyright: FC<CopyrightProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Typography variant="body2" color="textSecondary" align="center" {...props}>
    © 工華祭実行委員会
  </Typography>
);

export default Copyright;
