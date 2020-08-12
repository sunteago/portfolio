import React from "react"
import { css } from "@emotion/core"

export default function Presentation() {
  return (
    <h1
      css={css`
        font-size: 3.75rem;
        font-weight: 300;
        grid-area: pres;
      `}
    >
      Hi, i am Santiago Vallejo, Frontend developer
    </h1>
  )
}
