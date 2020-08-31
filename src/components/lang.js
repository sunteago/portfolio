import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"

const Lang = styled.span`
  display: none;
  grid-area: netwrk;
  @media (min-width: ${breakpoints.lg}) {
    font-weight: bold;
    font-size: 2rem;
    display: block;
    grid-area: lang;
  }
`

export default function TopNav() {
  return <Lang>en / es</Lang>
}
