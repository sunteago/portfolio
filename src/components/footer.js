import React from "react"
import styled from "@emotion/styled"
import { SectionContainer } from "./common"

const FooterBox = styled.div`
  width: 100%;
  overflow: hidden;
  height: 6rem;
  div {
    background: var(--dark);
    position: relative;
    height: 10rem;
    width: 120%;
    left: -10%;
    transform: rotate(11deg);
    transform-origin: left top;
    p {
      position: absolute;
      transform: translate(-50%, 0);
      font-size: 1.5rem;
      left: 50%;
    }
    p:nth-child(1) {
      top: -2rem;
      color: var(--dark);
    }
    p:nth-child(2) {
      top: 0;
      color: var(--light);
    }
  }
`

export default function Footer() {
  return (
    <SectionContainer gridArea="fotr">
      <FooterBox>
        <div>
          <p>Designed by</p>

          <p>Santiago Vallejo</p>
        </div>
      </FooterBox>
    </SectionContainer>
  )
}
