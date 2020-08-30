import React from "react"
import { css } from "@emotion/core"

export default function SectionContainer({
  children,
  gridArea,
  extraStyles = ``,
}) {
  return (
    <div
      css={css`
        grid-area: ${gridArea};
        ${extraStyles}
      `}
    >
      {children}
    </div>
  )
}
