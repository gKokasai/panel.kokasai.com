import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiTypographyProps & {children: ReactNode}

const Typography: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiTypography {...props}>
      {children}
    </MuiTypography>
  );
};
export default Typography;
