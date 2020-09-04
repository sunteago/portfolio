import React from "react"
import Presentation from "../components/presentation"
import Projects from "../components/projects/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"

export default function Home() {
  return (
    <>
      <Presentation />
      <Projects />
      <Contact />
      <Skills />
    </>
  )
}
