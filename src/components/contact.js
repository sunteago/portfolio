import React from "react"
import { css } from "@emotion/core"

export default function Contact() {
  return (
    <div
      css={css`
        height: 200px;
        background: var(--dark);
        grid-area: cntc;
      `}
    >
      Contact
    </div>
  )
}
