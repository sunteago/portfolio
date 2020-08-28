import React from "react"
import { Title } from "./common"
import useProjects from "../hooks/use-projects"
import ProjectCard from "./project-card"
import SectionContainer from "./common/SectionContainer"

export default function Works() {
  const projects = useProjects()

  return (
    <SectionContainer gridArea="wrk">
      <Title>Projects</Title>
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </SectionContainer>
  )
}
