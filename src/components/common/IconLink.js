import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const StandardLink = props => <a {...props}>{props.children}</a>

export default ({ href, children, internal, hover }) => {
  let LinkComponent = StandardLink
  internal && (LinkComponent = Link)

  return (
    <LinkComponent
      rel="noopener noreferrer"
      target="_blank"
      href={!internal ? href : undefined}
      to={internal ? href : undefined}
      css={css`
        color: unset;
        transition: all 0.2s ease-in;
        &:hover {
          ${hover && "color: var(--accent);"}
        }
      `}
    >
      {children}
    </LinkComponent>
  )
}
