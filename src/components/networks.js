import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"
import { GithubIcon, LinkedinIcon, SectionContainer } from "./common"

const Networks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 1.5rem;
  top: 2.5rem;

  > div {
    margin: 0 0.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    align-items: flex-start;
    right: 6.5rem;
    top: 1rem;
  }
`

export default function TopNav() {
  return (
    <Networks>
      <GithubIcon width={34} />
      <LinkedinIcon width={34} />
    </Networks>
  )
}
