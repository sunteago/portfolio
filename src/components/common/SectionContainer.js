import React from "react"
import { css } from "@emotion/core"

export default function SectionContainer({ children, gridArea }) {
  return (
    <div
      css={css`
        grid-area: ${gridArea};
      `}
    >
      {children}
    </div>
  )
}
