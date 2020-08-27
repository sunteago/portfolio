import React from "react"
import { css } from "@emotion/core"
import { breakpoints } from "../utils"

export default function Skills() {
  return (
    <div
      css={css`
        height: 200px;
        background: var(--dark);
        media (min-width: ${breakpoints.md}) {
          grid-area: skls;
        }
      `}
    >
      Skills
    </div>
  )
}
