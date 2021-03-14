import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils"
import { localStorageOpts } from "../../constants"
import { DarkModeIcon } from "../common"
import { useContext } from "react"
import pageOptionsContext from "../../context/pageOptionsContext"
import { useTranslation } from "react-i18next"

export default function PageOptions() {
  const { setPageOptions } = useContext(pageOptionsContext)
  const [darkMode, setDarkMode] = React.useState(true)
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedPageOptions = localStorage.getItem(localStorageOpts)

    if (savedPageOptions) {
      const pageOptions = JSON.parse(savedPageOptions)
      setDarkMode(pageOptions.darkMode)
      i18n.changeLanguage(pageOptions.lang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      localStorageOpts,
      JSON.stringify({
        lang: i18n.language,
        darkMode,
      })
    )

    setPageOptions({ lang: i18n.language, darkMode })
  }, [darkMode, setPageOptions])

  return (
    <PageOptionsContainer>
      <LanguageSwitch>
        <ToggleLanguageButton
          id="en"
          active={i18n.language === "en" && "true"}
          onClick={() => i18n.changeLanguage("en")}
        >
          en
        </ToggleLanguageButton>
        <ToggleLanguageButton
          id="es"
          active={i18n.language === "es" && "true"}
          onClick={() => i18n.changeLanguage("es")}
        >
          es
        </ToggleLanguageButton>
      </LanguageSwitch>
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

const LanguageSwitch = styled.div``

const ToggleLanguageButton = styled.span`
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
