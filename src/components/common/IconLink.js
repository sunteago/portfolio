import React from "react"

const StandardLink = props => <a {...props}>{props.children}</a>

export default ({ href, children, component }) => {
  let LinkComponent = StandardLink
  if (component) LinkComponent = component

  return (
    <LinkComponent
      rel="noopener noreferrer"
      target="_blank"
      href={component === undefined && href}
      to={component !== undefined && href}
      style={{ color: "unset" }}
    >
      {children}
    </LinkComponent>
  )
}
