import React from "react"
import styled from "@emotion/styled"
import { TriangleIcon } from "./common"
import { breakpoints } from "../utils"

export default function Presentation() {
  return (
    <>
      <Greet>
        Hi, I am <span className="accent">Santiago Vallejo</span>, frontend
        develope
        <span className="triangle">
          r<TriangleIcon position="A" />
        </span>
      </Greet>
      <ShortBio>Specialized in React and React-Native</ShortBio>
    </>
  )
}

const Greet = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  position: relative;
  .accent {
    color: var(--accent);
  }
  .triangle {
    position: relative;
    svg {
      position: absolute;
      bottom: 0.3rem;
      margin-left: 0.5rem;
      @media (min-width: ${breakpoints.md}) {
        margin-left: 1rem;
        width: calc(1.4rem + 1.6vw);
        height: calc(1.4rem + 1.6vw);
        bottom: 0;
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: calc(2rem + 1vw);
    width: 100%;
    /* margin-bottom: 1rem; */
  }
  @media (min-width: ${breakpoints.xl}) {
    /* margin-bottom: 2rem; */
  }
`

const ShortBio = styled.p`
  margin: 0.5rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  @media (min-width: ${breakpoints.xl}) {
    font-size: calc(1rem + 0.5vw);
  }
`
