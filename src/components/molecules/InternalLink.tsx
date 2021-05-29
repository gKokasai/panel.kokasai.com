import React, { FC } from "react";
import { Link as DOMLink, LinkProps as DOMLinkProps } from "react-router-dom";
import Link from "../atoms/Link";

export type InternalLinkProps = DOMLinkProps;

const InternalLink: FC<InternalLinkProps> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DOMLink {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link>{children}</Link>
    </DOMLink>
  );
};

export default InternalLink;
