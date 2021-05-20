import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import React, { FC } from 'react';

export type TypographyProps = MuiTypographyProps;

const Typography: FC<TypographyProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiTypography {...props} />
);

export default Typography;
