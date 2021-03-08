import React, { useState } from "react"
import { breakpoints } from "../../utils"
import styled from "@emotion/styled"
import pageOptionsContext from "../../context/pageOptionsContext"
import { useContext } from "react"

export default function MobileNavigation() {
  const [toggled, setToggled] = useState(false)
  const { pageOptions } = useContext(pageOptionsContext)

  return (
    <>
      <MobileToggle
        darkMode={pageOptions.darkMode}
        toggled={toggled}
        onClick={() => setToggled(!toggled)}
      >
        <div>
          <div></div>
        </div>
      </MobileToggle>
      <MobileNavMenu toggled={toggled}>
        <ul>
          <li>Projects</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </MobileNavMenu>
    </>
  )
}

const MobileToggle = styled.div`
  cursor: pointer;
  position: fixed;
  height: 20vh;
  width: 100vh;
  right: 0;
  top: 40vh;
  transform: translate(90%, 0%) rotate(45deg);
  background: var(--secondary);
  border-radius: 5px;
  border: 2px solid var(--primary);
  box-shadow: 2px 2px 2px var(--secondary);
  z-index: 1000;
  transform-origin: left bottom;
  transition: all 0.3s ease-in;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }

  ${props =>
    props.toggled &&
    `
      background: var(--accent); 
      box-shadow: none;
      border: none;
  `}
  & > div {
    width: 25px;
    position: absolute;
    bottom: 29px;
    left: 12px;
    transform: rotate(-45deg);
    transition: all 0.15s ease-in;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    div {
      position: relative;
      width: 100%;
      height: 2.5px;
      background: var(--primary);
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        right: 0;
        transform-origin: center center;
        transition: transform 0.25s ease, top 0.25s ease, bottom 0.25s ease;
      }

      &::before { 
        top: -10px;
        width: 70%;
      }

      &::after {
        bottom: -10px;
        width: 85%;
      }
      ${props => {
        const closeColor = props.darkMode
          ? "var(--secondary)"
          : "var(--primary)"
        return (
          props.toggled &&
          `
					background: transparent;
					
					&::before, &::after {
            width: 100%;
						background: ${closeColor};
					}
					
					&::before {
						transform: rotate(45deg);
						top: 0;
					}
					&::after {
						transform: rotate(-45deg);
						bottom: 0;
					}
      `
        )
      }}
  }
  
  span {
    display: none;
  }

  
`
const MobileNavMenu = styled.nav`
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background: var(--secondary);
  transition: all 0.3s ease-in-out;
  ${props =>
    props.toggled &&
    `right: 0;
  `}
  ul {
    list-style: none;
    height: 100%;
    color: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    li {
      margin: 1.5rem 0;
    }
  }
`
