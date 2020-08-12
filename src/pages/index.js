import React from "react"
import Layout from "../components/layout"

import Presentation from "../components/presentation"
import Works from "../components/works"
import Contact from "../components/contact"
import Skills from "../components/skills"

export default function Home() {
  return (
    <Layout>
      <Presentation />
      <Works />
      <Contact />
      <Skills />
    </Layout>
  )
}
