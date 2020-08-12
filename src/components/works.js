import React from "react"
import { css } from "@emotion/core"

export default function Works() {
  return (
    <div
      css={css`
        grid-area: wrk;
      `}
    >
      <div
        css={css`
          color: var(--light);
          font-size: 3rem;
          height: 300px;
          background: var(--dark);
        `}
      >
        Image
      </div>
      <div>
        <h3>TeamsApp</h3>
        <p>collaborative app to organize projects</p>
      </div>
      <p>Made using React.js, REDUX, Firebase and Material UI</p>
      <div>
        <button>source code</button>
        <button>demo</button>
      </div>
    </div>
  )
}
