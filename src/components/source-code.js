import React from "react"
import styled from "@emotion/styled"
import { GithubIcon } from "./common"
import { breakpoints } from "../utils"

const SourceText = styled.div`
  position: fixed;
  bottom: 0;
  left: 1rem;
  user-select: none;
  font-size: calc(0.5rem + 0.7vw);
  display: none;
  :hover {
    a {
      color: var(--accent);
      font-weight: bold;
    }
  }
  > div {
    margin-left: 0.5rem;
  }
  > a {
    text-decoration: none;
    color: var(--dark);
    transition: color 0.15s ease-in;
  }
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`

export default function SourceCode() {
  return (
    <SourceText>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sunteago /portfolio"
      >
        source code
      </a>
      <GithubIcon hover link="https://github.com/sunteago/portfolio" />
    </SourceText>
  )
}
