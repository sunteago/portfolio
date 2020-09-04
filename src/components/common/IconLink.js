import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const SimpleWrapper = props => <div {...props}>{props.children}</div>

const StandardLink = props => <a {...props}>{props.children}</a>

export default ({ href, children, internal, hover }) => {
  let WrapperComponent = SimpleWrapper
  if (href) {
    if (internal) WrapperComponent = Link
    else WrapperComponent = StandardLink
  }
  console.log(href, internal)
  return (
    <WrapperComponent
      rel={href ? "noopener noreferrer" : undefined}
      target={href ? "_blank" : undefined}
      href={!internal ? href : undefined}
      to={internal ? href : undefined}
      css={css`
        color: unset;
        transition: all 0.15s ease-in;
        &:hover {
          ${hover ? "color: var(--accent);" : null}
        }
      `}
    >
      {children}
    </WrapperComponent>
  )
}
