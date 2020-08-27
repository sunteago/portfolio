import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { TriangleIcon } from "./icons"

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  svg {
    vertical-align: middle;
  }
`

export default function Works() {
  return (
    <div
      css={css`
        grid-area: wrk;
      `}
    >
      <Title>
        <TriangleIcon position="B" width={35} />
        Works
      </Title>
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
