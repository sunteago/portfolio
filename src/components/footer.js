import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"

export default function Footer() {
  return (
    <FooterBox>
      <div>
        <p>Designed by</p>
        <p>Santiago Vallejo</p>
      </div>
    </FooterBox>
  )
}

const FooterBox = styled.div`
  width: 100%;
  overflow: hidden;
  height: 25vw;
  height: calc(25vw + 16px);
  div {
    background: var(--secondary);
    position: relative;
    height: 40vw;
    width: 120%;
    left: -10%;
    transform: rotate(13deg);
    transform-origin: left top;
    p {
      position: absolute;
      transform: translate(-50%, 0);
      font-size: 1.5rem;
      left: 50%;
    }
    p:nth-of-type(1) {
      top: -2rem;
      color: var(--secondary);
    }
    p:nth-of-type(2) {
      top: 0;
      color: var(--primary);
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
