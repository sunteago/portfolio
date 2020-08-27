import React from "react"
import { css } from "@emotion/core"
import { Title } from "./common"
import useProjects from "../hooks/use-projects"
import ProjectCard from "./project-card"

export default function Works() {
  const projects = useProjects()

  return (
    <div
      css={css`
        grid-area: wrk;
      `}
    >
      <Title>Projects</Title>
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
