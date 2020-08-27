import React from "react"
import styled from "@emotion/styled"
import { TriangleIcon } from "./icons"
import { breakpoints } from "../utils"
const Greet = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  grid-area: pres;
  svg {
    vertical-align: middle;
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: 3.75rem;
    width: 100%;
`

export default function Presentation() {
  return (
    <Greet>
      Hi, i am Santiago Vallejo, Frontend developer{" "}
      <TriangleIcon width={38} height={38} position="A" />
    </Greet>
  )
}
