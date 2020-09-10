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
      <Section gridArea="cntc" extraStyles={extraStylesContact}>
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
