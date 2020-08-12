import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const NavBarContainer = styled.div`
  position: absolute;
  top: -10vh;
  right: 0;
  width: 140px;
  background: var(--dark);
  transform-origin: 50% 50%;
  height: 120vh;
  transform: rotate(7deg);
  transition: 0.1s width ease-out;
  ::after {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    height: 120vh;
    width: 500px;
    transform: translate(99%);
    background: var(--dark);
  }
  :hover {
    width: 160px;
  }
`

const NavBar = styled.nav`
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: left top;
  position: absolute;
  left: 0.2rem;
  top: 50%;
`

const NavLink = styled(Link)`
  color: var(--light);
  font-size: 3rem;
  margin: 1.5rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  ${props => props.active && "font-weight: 400;"}
  :hover {
    border-bottom: 2px solid var(--light);
  }
`

export default function RightNav() {
  return (
    <NavBarContainer>
      <NavBar>
        <NavLink active>Works</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Resume</NavLink>
      </NavBar>
    </NavBarContainer>
  )
}
