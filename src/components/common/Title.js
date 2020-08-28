import React from "react"
import { css } from "@emotion/core"
import TriangleIcon from "./Triangle"

export default function Title({ children }) {
  return (
    <h2
      css={css`
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        svg {
          vertical-align: middle;
        }
      `}
    >
      <TriangleIcon position="B" width={35} />
      {children}
    </h2>
  )
}
