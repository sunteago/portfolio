import React, { useState } from "react"
import { breakpoints } from "../../utils"
import styled from "@emotion/styled"

export default function MobileNav() {
  const [toggled, setToggled] = useState(false)

  return (
    <MobileNavbar toggled={toggled} onClick={() => setToggled(!toggled)}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </MobileNavbar>
  )
}

const MobileNavbar = styled.nav`
  cursor: pointer;
  position: fixed;
  height: 110vh;
  width: 100vh;
  right: 0;
  bottom: 32px;
  transform: translate(90%, 0%) rotate(45deg);
  background: var(--accent);
  z-index: 1000;
  transform-origin: left bottom;
  transition: all 0.15s ease-in;
  opacity: 0.8;
  & > div {
    width: 35px;
    position: absolute;
    bottom: 8px;
    left: 8px;
    transform: rotate(-45deg);
    transition: all 0.15s ease-in;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    div {
      border: 1.5px solid var(--light);
      background: var(--light);
      width: 100%;
      margin: 4px;
      &:nth-of-type(1) {
        width: 70%;
      }
      &:nth-of-type(2) {
        width: 50%;
      }
      &:nth-of-type(3) {
        width: 85%;
      }
    }
  }
  ${props =>
    props.toggled &&
    `
    transform: translate(88%, 0%) rotate(6.5deg);
    bottom: 0px;
    opacity: 1;
    > div {
      transform: rotate(-6.5deg);
      bottom: 20px;
      left: 20px;
  }`}
  
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
