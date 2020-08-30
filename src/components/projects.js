import React from "react"
import { Title } from "./common"
import useProjects from "../hooks/use-projects"
import ProjectCard from "./project-card/project-card"
import SectionContainer from "./common/SectionContainer"

export default function Works() {
  const projects = useProjects()

  return (
    <SectionContainer gridArea="wrk">
      <Title>Projects</Title>
      <ProjectCard projects={projects} />
    </SectionContainer>
  )
}
