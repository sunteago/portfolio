import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { localStorageOpts } from "../../constants"
import { useContext } from "react"
import pageOptionsContext from "../../context/pageOptionsContext"
import { useTranslation } from "react-i18next"
import DarkModeSwitch from "../common/darkmode-switch"
import LanguageSwitch from "../common/language-switch"
import { navigatesFromMobile } from "../../utils"

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
  }, [i18n])

  useEffect(() => {
    localStorage.setItem(
      localStorageOpts,
      JSON.stringify({
        lang: i18n.language,
        darkMode,
      })
    )

    setPageOptions({ lang: i18n.language, darkMode })
  }, [i18n.language, darkMode, setPageOptions])

  return (
    <PageOptionsContainer id="page-options" mobile={navigatesFromMobile()}>
      <LanguageSwitch
        language={i18n.language}
        setLanguage={lang => i18n.changeLanguage(lang)}
      />
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </PageOptionsContainer>
  )
}

const PageOptionsContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 20%;
  z-index: 100;

  ${({ mobile }) =>
    mobile &&
    `
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 2rem;
  `}
`
