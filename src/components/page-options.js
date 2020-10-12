import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"
import { localStorageOpts } from "../constants"
import { DarkModeIcon } from "./common"

export default function PageOptions({ setPageOptions }) {
  const [lang, setLang] = React.useState("en")
  const [darkMode, setDarkMode] = React.useState(true)

  useEffect(() => {
    const savedPageOptions = localStorage.getItem(localStorageOpts)
    if (savedPageOptions) {
      const pageOptions = JSON.parse(savedPageOptions)
      setLang(pageOptions.lang)
      setDarkMode(pageOptions.darkMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      localStorageOpts,
      JSON.stringify({
        lang,
        darkMode,
      })
    )
    setPageOptions({ lang, darkMode })
  }, [lang, darkMode])

  return (
    <PageOptionsContainer>
      <Lang>
        <ToggleLangBtn
          id="en"
          active={lang === "en" && "true"}
          onClick={() => {
            setLang("en")
          }}
        >
          en
        </ToggleLangBtn>
        <ToggleLangBtn
          id="es"
          active={lang === "es" && "true"}
          onClick={() => {
            setLang("es")
          }}
        >
          es
        </ToggleLangBtn>
      </Lang>
      <DarkMode darkMode={darkMode} onClick={() => setDarkMode(prev => !prev)}>
        <DarkModeIcon />
      </DarkMode>
    </PageOptionsContainer>
  )
}

const PageOptionsContainer = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  left: 20%;
  z-index: 100;
  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.25rem;
    display: flex;
  }
`

const Lang = styled.div``

const ToggleLangBtn = styled.span`
  color: var(--secondary);
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: calc(0.7rem + 0.7vw);
  ${props =>
    props.active &&
    `background: var(--secondary);
     color: var(--primary);
     font-weight: bold;
       `}
  &#en {
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0% 100%);
    padding: 0.3rem 1.2rem 0.3rem 0.5rem;
  }
  &#es {
    clip-path: polygon(28% 0, 100% 0, 100% 100%, 0% 100%);
    padding: 0.3rem 0.5rem 0.3rem 1.2rem;
    margin-left: -14px;
  }
`

const DarkMode = styled.div`
  margin-left: 3rem;
  cursor: pointer;
  svg {
    transition: all 0.3s ease-in;
    color: var(--secondary);
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
