import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const SimpleWrapper = props => <div {...props}>{props.children}</div>

const StandardLink = props => <a {...props}>{props.children}</a>

export default function IconLink({
  href,
  children,
  internal,
  hover,
  onClick,
  cssStyles = "",
}) {
  let WrapperComponent = SimpleWrapper
  if (href) {
    if (internal) WrapperComponent = Link
    else WrapperComponent = StandardLink
  }

  return (
    <WrapperComponent
      rel={href ? "noopener noreferrer" : undefined}
      target={href ? "_blank" : undefined}
      href={!internal ? href : undefined}
      to={internal ? href : undefined}
      onClick={onClick}
      css={css`
        color: unset;
        transition: color 0.15s ease-in;
        &:hover {
          ${hover ? "color: var(--accent);" : null}
        }
        ${cssStyles}
      `}
    >
      {children}
    </WrapperComponent>
  )
}
