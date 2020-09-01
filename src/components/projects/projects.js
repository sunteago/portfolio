import React from "react"
import { Title } from "../common"
import useProjects from "../../hooks/use-projects"
import ProjectCard from "./project-card"
import SectionContainer from "../common/SectionContainer"
import Button from "../common/Button"

export default function Works() {
  const projects = useProjects()

  return (
    <SectionContainer
      gridArea="wrk"
      extraStyles={`justify-self: center; width: 95%`}
    >
      <Title>Projects</Title>
      <ProjectCard projects={projects} />
      <Button>See more</Button>
    </SectionContainer>
  )
}
