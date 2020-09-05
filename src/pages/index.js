import React from "react"
import { breakpoints } from "../utils"
import Presentation from "../components/presentation"
import Projects from "../components/projects/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Section from "../components/common/SectionContainer"

export default function Home() {
  return (
    <>
      <Section gridArea="pres" extraStyles={extraStylesPresentation}>
        <Presentation />
      </Section>
      <Section gridArea="wrk" extraStyles={extraStylesProjects}>
        <Projects />
      </Section>
      <Section gridArea="cntc">
        <Contact />
      </Section>
      <Section gridArea="skls" extraStyles={extraStylesSkills}>
        <Skills />
      </Section>
    </>
  )
}

const extraStylesSkills = `
  justify-self: center;
  @media(min-width: ${breakpoints.md}) {
    justify-self: start;
  }
`

const extraStylesProjects = `
  margin-top: 4rem;
  justify-self: center; 
  width: 95%;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
  };
`

const extraStylesPresentation = `align-self: end`
