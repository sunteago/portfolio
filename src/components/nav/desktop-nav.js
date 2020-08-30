import React from "react"
import { Link } from "gatsby"
import { breakpoints } from "../../utils"
import styled from "@emotion/styled"

export default function RightNav() {
  return (
    <>
      <NavBarContainer>
        <NavBar>
          <NavLink title="Works" active="true" to="/">
            Works
          </NavLink>
          <NavLink title="About" to="/">
            About
          </NavLink>
          <NavLink title="Contact" to="/">
            Contact
          </NavLink>
          <NavLink title="Resume" to="/">
            Resume
          </NavLink>
        </NavBar>
      </NavBarContainer>
    </>
  )
}

const NavBarContainer = styled.div`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    display: block;
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
  }
`

const NavBar = styled.nav`
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: left top;
  position: absolute;
  left: -1.3rem;
  top: 50%;
  display: flex;
`

const NavLink = styled(Link)`
  color: var(--light);
  font-size: 3rem;
  margin: 1.5rem;
  font-weight: 300;
  display: block;
  text-align: center;
  user-select: none;
  text-decoration: none;

  :hover {
    font-weight: 400;
  }
  ::before {
    display: block;
    content: attr(title);
    font-weight: 400;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  ${props => props.active && "font-weight: 400;"}
`
