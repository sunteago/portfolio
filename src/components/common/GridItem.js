import React from "react"
import { css } from "@emotion/core"

export default function GridItem({ children, area, styles = `` }) {
  return (
    <div
      css={css`
        grid-area: ${area};
        ${styles}
      `}
    >
      {children}
    </div>
  )
}
