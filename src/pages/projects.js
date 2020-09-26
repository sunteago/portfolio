import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Title } from "../components/common"
import useProjects from "../hooks/use-projects"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { clipAtChar } from "../utils"

export default function Home() {
  const projects = useProjects()

  return (
    <>
      <Title
        heading="h1"
        css={css`
          grid-area: 3 / 4 / 4 / 10;
          h1 {
            font-family: var(--font-secondary);
            font-size: calc(3rem + 1vw);
            font-weight: 300;
            width: 100%;
          }
        `}
      >
        Projects
      </Title>
      <ProjectsContainer>
        {projects.map((project, idx) => {
          return (
            <SingleProject to={`/project/${project.slug}`}>
              {idx % 2 ? (
                <SingleProjectImg
                  side="left"
                  fluid={project.image.sharp.fluid}
                />
              ) : null}
              <SingleProjectDetails side={idx % 2 ? "right" : "left"}>
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
                <SingleProjectBody>
                  {clipAtChar(project.excerpt)}
                </SingleProjectBody>
              </SingleProjectDetails>
              {idx % 2 ? null : (
                <SingleProjectImg
                  side="right"
                  fluid={project.image.sharp.fluid}
                />
              )}
            </SingleProject>
          )
        })}
      </ProjectsContainer>
    </>
  )
}

const ProjectsContainer = styled.div`
  grid-area: 4 / 4 / 6 / 10;
`

const SingleProject = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: var(--dark);
`

const SingleProjectDetails = styled.div`
  text-align: ${prp => (prp.side === "left" ? "left" : "right")};
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
  }
`

const SingleProjectImg = styled(Image)`
  height: 150px;
  width: 200px;
  ${props =>
    props.side === "left" &&
    `
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
      margin-right: 1rem;
    `}
  ${props =>
    props.side === "right" &&
    `
      clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);
      margin-left: 1rem;
    `};
`

const SingleProjectBody = styled.p``
