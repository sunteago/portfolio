import React from "react"

export default ({ href, children }) => (
  <a
    rel="noopener noreferrer"
    target="_blank"
    href={href}
    style={{ color: "unset" }}
  >
    {children}
  </a>
)
