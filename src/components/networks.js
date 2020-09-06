import React from "react"
import styled from "@emotion/styled"
import { breakpoints, defaultGithubLink, linkedinLink } from "../utils"
import { GithubIcon, LinkedinIcon, IconLink } from "./common"

const Networks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  z-index: 2;

  > a {
    margin: 0 0.3rem;
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
      <IconLink href={defaultGithubLink} hover>
        <GithubIcon width={34} />
      </IconLink>
      <IconLink href={linkedinLink} hover>
        <LinkedinIcon width={34} />
      </IconLink>
    </Networks>
  )
}
