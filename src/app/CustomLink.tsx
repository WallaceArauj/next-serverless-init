import { ReactNode, ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface CustomLinkProps extends LinkProps {
  children: ReactNode; // Alteração do tipo para aceitar ReactNode
  className?: string;
  legacyBehavior?: boolean;
}

const CustomLink = ({ children, className, legacyBehavior, ...rest }: CustomLinkProps) => {
  if (legacyBehavior) {
    return (
      <Link {...rest}>
        <span className={className} data-legacy-behavior={legacyBehavior}>
          {children}
        </span>
      </Link>
    );
  }

  if (React.isValidElement(children)) {
    return (
      <Link {...rest}>
        {cloneElement(children as ReactElement, {
          className: `${className} ${children.props.className || ''}`,
        })}
      </Link>
    );
  }

  // Se children não for um elemento React, renderizamos apenas o texto
  return <Link {...rest}>{children}</Link>;
};

export default CustomLink;
