import React from "react"
import { css } from "@emotion/core"

export default function SectionContainer({
  children,
  gridArea,
  justifySelf = "unset",
}) {
  return (
    <div
      css={css`
        grid-area: ${gridArea};
        justify-self: ${justifySelf};
      `}
    >
      {children}
    </div>
  )
}
