import React from "react"
import { breakpoints } from "../utils"
import Presentation from "../components/presentation"
import Projects from "../components/projects/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"
import GridItem from "../components/common/GridItem"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"
import Layout from "../components/layout"
import { gridAreas } from "../constants/gridAreas"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Santiago Vallejo - {t(translateKeys.REACT_DEVELOPER)}</title>
      </Helmet>

      {/* Grid items */}
      <GridItem area={gridAreas.PRESENTATION} styles={presentationStyles}>
        <Presentation />
      </GridItem>
      <GridItem area={gridAreas.PROJECTS} styles={projectsStyles}>
        <Projects />
      </GridItem>
      <GridItem area={gridAreas.CONTACT} styles={contactStyles}>
        <Contact fullEmail />
      </GridItem>
      <GridItem area={gridAreas.SKILLS} styles={skillsStyles}>
        <Skills />
      </GridItem>
    </>
  )
}

HomePage.Layout = Layout

const skillsStyles = `
  justify-self: center;

  @media(min-width: ${breakpoints.lg}) {
    padding-left: 1rem;
    justify-self: start;
  }
`

const projectsStyles = `
  margin-top: 4rem;
  justify-self: center; 
  width: 95%;

  @media (min-width: ${breakpoints.lg}) {
    width: 93%;
    margin-top: 0;
    justify-self: start;
  };
`

const contactStyles = `
  @media(min-width: ${breakpoints.md}) {
    padding-left: 1rem;
}`

const presentationStyles = `align-self: end`
