import React, { FC } from 'react';
import Link, { Props as LinkProps } from '../atoms/Link';

export type Props = LinkProps

const ExternalLink: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...props}>
      {children}
    </Link>
  );
};

export default ExternalLink;
