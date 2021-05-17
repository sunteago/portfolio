import React from "react"
import styled from "@emotion/styled"
import { DarkModeIcon } from "."
import { navigatesFromMobile } from "../../utils"

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  return (
    <DarkMode
      darkMode={darkMode}
      onClick={() => setDarkMode(prev => !prev)}
      mobile={navigatesFromMobile()}
    >
      <DarkModeIcon />
    </DarkMode>
  )
}

const DarkMode = styled.div`
  margin-left: 3rem;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-in;
    color: ${props => (props.mobile ? "var(--primary)" : "var(--secondary)")};
    width: calc(1.4rem + 0.7vw);

    :hover {
      color: var(--accent);
    }

    ${props =>
      props.darkMode
        ? `
          transform: translate(-50%, 0);
          rotate(180deg);
        `
        : `transform: translate(-50%, 0) `};
  }
`
