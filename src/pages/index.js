import React from "react"
import Layout from "../components/layout"
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
