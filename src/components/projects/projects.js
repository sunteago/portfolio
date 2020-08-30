import React from "react"
import { Title } from "../common"
import useProjects from "../../hooks/use-projects"
import ProjectCard from "./project-card"
import SectionContainer from "../common/SectionContainer"
import SeeMore from "./see-more"

export default function Works() {
  const projects = useProjects()

  return (
    <SectionContainer gridArea="wrk" justifySelf="start">
      <Title>Projects</Title>
      <ProjectCard projects={projects} />
      <SeeMore />
    </SectionContainer>
  )
}
