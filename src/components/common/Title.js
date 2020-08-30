import React from "react"
import { css } from "@emotion/core"
import TriangleIcon from "./Triangle"
import { breakpoints } from "../../utils"

export default function Title({ children }) {
  return (
    <h2
      css={css`
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        svg {
          vertical-align: middle;
        }
        @media (min-width: ${breakpoints.lg}) {
          text-align: left;
        }
      `}
    >
      <TriangleIcon position="B" width={35} />
      {children}
    </h2>
  )
}
