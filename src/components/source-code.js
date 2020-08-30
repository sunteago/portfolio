import React from "react"
import styled from "@emotion/styled"
import { GithubIcon, SectionContainer } from "./common"

const SourceText = styled.div`
  position: fixed;
  bottom: 0;
  left: 1rem;
  user-select: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  > div {
    margin-left: 0.5rem;
  }
  > a {
    text-decoration: none;
    color: var(--dark);
  }
`

export default function SourceCode() {
  return (
    <SourceText>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sunteago/portfolio"
      >
        source code
      </a>
      <GithubIcon link="https://github.com/sunteago/portfolio" />
    </SourceText>
  )
}
