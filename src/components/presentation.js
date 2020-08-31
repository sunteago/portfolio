import React from "react"
import styled from "@emotion/styled"
import { TriangleIcon } from "./common"
import { breakpoints } from "../utils"
const Greet = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  grid-area: pres;
  align-self: end;
  position: relative;
  span {
    color: var(--accent);
  }
  svg {
    vertical-align: middle;
    position: absolute;
    @media (min-width: ${breakpoints.xs}) {
      bottom: 0.3rem;
      margin-left: 0.5rem;
    }
    @media (min-width: ${breakpoints.sm}) {
      bottom: 0.6rem;
      margin-left: 1rem;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: calc(2rem + 1vw);
    width: 100%;
    margin-bottom: 1rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-bottom: 2rem;
  }
`

export default function Presentation() {
  return (
    <Greet>
      Hi, I am <span>Santiago Vallejo</span>, frontend developer
      <TriangleIcon width={38} height={38} position="A" />
    </Greet>
  )
}
