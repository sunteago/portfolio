import React from "react"

export default ({ href, children }) => (
  <a rel="noopener noreferrer" href={href} style={{ color: "unset" }}>
    {children}
  </a>
)
