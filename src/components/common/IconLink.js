import React from "react"
import { Link } from "gatsby"

const StandardLink = props => <a {...props}>{props.children}</a>

export default ({ href, children, internal }) => {
  let LinkComponent = StandardLink
  internal && (LinkComponent = Link)

  return (
    <LinkComponent
      rel="noopener noreferrer"
      target="_blank"
      href={!internal ? href : undefined}
      to={internal ? href : undefined}
      style={{ color: "unset" }}
    >
      {children}
    </LinkComponent>
  )
}
