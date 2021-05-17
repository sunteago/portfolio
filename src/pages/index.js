import React from "react"
import { breakpoints } from "../utils"
import Presentation from "../components/presentation"
import Projects from "../components/projects/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Section from "../components/common/SectionContainer"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Santiago Vallejo - {t(translateKeys.REACT_DEVELOPER)}</title>
      </Helmet>
      <Section gridArea="pres" extraStyles={extraStylesPresentation}>
        <Presentation />
      </Section>
      <Section gridArea="wrk" extraStyles={extraStylesProjects}>
        <Projects />
      </Section>
      <Section gridArea="cntc" extraStyles={extraStylesContact}>
        <Contact fullEmail />
      </Section>
      <Section gridArea="skls" extraStyles={extraStylesSkills}>
        <Skills />
      </Section>
    </>
  )
}

const extraStylesSkills = `
  justify-self: center;

  @media(min-width: ${breakpoints.lg}) {
    padding-left: 1rem;
    justify-self: start;
  }
`

const extraStylesProjects = `
  margin-top: 4rem;
  justify-self: center; 
  width: 95%;

  @media (min-width: ${breakpoints.lg}) {
    width: 93%;
    margin-top: 0;
    justify-self: start;
  };
`

const extraStylesContact = `
  @media(min-width: ${breakpoints.md}) {
    padding-left: 1rem;
}`

const extraStylesPresentation = `align-self: end`
