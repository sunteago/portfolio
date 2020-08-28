import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"
import { GithubIcon, LinkedinIcon } from "./common"

const Lang = styled.span`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
    grid-area: netwrk;
  }
`

const NetworkContainer = styled.div`
  grid-area: netwrk;
  display: flex;
  flex-wrap: wrap;
  max-height: 100px;

  div {
    margin: 0.5rem;
    text-align: right;
    width: 100%;
  }
`

export default function TopNav() {
  return (
    <>
      <Lang>en / es</Lang>
      <NetworkContainer>
        <GithubIcon />
        <LinkedinIcon />
      </NetworkContainer>
    </>
  )
}