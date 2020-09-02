import React from "react"
import { Title, Button } from "../common"
import { breakpoints } from "../../utils"
import useProjects from "../../hooks/use-projects"
import ProjectCard from "./project-card"
import SectionContainer from "../common/SectionContainer"
import { css } from "@emotion/core"

export default function Works() {
  const projects = useProjects()
  return (
    <SectionContainer
      gridArea="wrk"
      extraStyles={`justify-self: center; width: 95%`}
    >
      <Title>Projects</Title>
      <ProjectCard projects={projects} />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button
          css={css`
            margin: 3rem 0 2rem auto;
            width: auto;

            @media (min-width: ${breakpoints.md}) {
              margin-top: calc(1.3vw + 1rem);
            }
            @media (min-width: ${breakpoints.lg}) {
              font-size: calc(0.2vw + 0.8rem);
            }
          `}
          component="Link"
          to="/projects"
        >
          See more
        </Button>
      </div>
    </SectionContainer>
  )
}
