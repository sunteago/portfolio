import React from "react"
import { Title, Button } from "../common"
import { breakpoints } from "../../utils"
import useProjects from "../../hooks/use-projects"
import ProjectCard from "./project-card"
import SectionContainer from "../common/SectionContainer"
import { css } from "@emotion/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Works() {
  const projects = useProjects()
  return (
    <SectionContainer
      gridArea="wrk"
      extraStyles={`justify-self: center; width: 95%`}
    >
      <Title>Projects</Title>
      <ProjectCard projects={projects} />
      <Button
        css={css`
          margin: 3rem 0 2rem auto;

          @media (min-width: ${breakpoints.md}) {
            margin-top: calc(1.3vw + 1rem);
          }
          @media (min-width: ${breakpoints.lg}) {
            font-size: calc(0.2vw + 0.8rem);
          }
        `}
      >
        See more
      </Button>
      <AniLink fade to="composer-page" bg="#2c2c54">
        Go to Page 4
      </AniLink>
    </SectionContainer>
  )
}
