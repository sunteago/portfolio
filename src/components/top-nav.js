import React from "react"
import { css } from "@emotion/core"

export default function TopNav() {
  return (
    <>
      <span
        css={css`
          grid-area: lang;
        `}
      >
        en / es
      </span>
      <p
        css={css`
          grid-area: netwrk;
        `}
      >
        Social Networks
      </p>
    </>
  )
}
