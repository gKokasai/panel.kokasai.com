import React, { FC } from 'react';
import Link, { LinkProps } from '../atoms/Link';

export type ExternalLinkProps = LinkProps;

const ExternalLink: FC<ExternalLinkProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link {...props} />
);

export default ExternalLink;
