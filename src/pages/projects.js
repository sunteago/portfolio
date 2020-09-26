import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Title } from "../components/common"
import useProjects from "../hooks/use-projects"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { clipAtChar, breakpoints } from "../utils"

export default function Home() {
  const projects = useProjects()

  return (
    <>
      <Title
        heading="h1"
        css={css`
          margin-top: 5rem;
          margin-bottom: 0;
          grid-area: 2/ 1 / 3/ 3;
          @media (min-width: ${breakpoints.md}) {
            margin: 0;
          }
          @media (min-width: ${breakpoints.lg}) {
            grid-area: 3 / 4 / 4 / 10;
          }
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
          const oddNum = idx % 2 !== 0
          return (
            <SingleProject to={`/project/${project.slug}`}>
              <SingleProjectTitle title={project.title} />
              <SingleProjectImg
                side={oddNum ? "left" : "right"}
                fluid={project.image.sharp.fluid}
              />

              <SingleProjectDetails side={oddNum ? "right" : "left"}>
                <SingleProjectTitle title={project.title} />
                <p>{project.subtitle}</p>
                <p>{clipAtChar(project.excerpt)}</p>
              </SingleProjectDetails>
            </SingleProject>
          )
        })}
      </ProjectsContainer>
    </>
  )
}

const SingleProjectTitle = ({ title }) => (
  <Title
    className="project-title"
    css={css`
      h2 {
        font-family: var(--font-secondary);
        font-weight: 300;
        font-size: 2rem;
      }
    `}
    triangle={false}
  >
    {title}
  </Title>
)

const ProjectsContainer = styled.div`
  grid-area: 3 / 1 /4 / 3;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 4 / 6 / 10;
  }
`

const SingleProject = styled(Link)`
  display: flex;
  color: var(--dark);
  text-decoration: none;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: ${breakpoints.md}) {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1.5rem;
    .project-title {
      display: none;
    }
  }
`

const SingleProjectDetails = styled.div`
  margin-top: 1rem;
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
  }
  .project-title {
    display: none;
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    text-align: ${prp => (prp.side === "left" ? "left" : "right")};
    div {
      ${prp =>
        prp.side === "right" ? "margin-left: auto;" : "margin-right: auto;"}
    }
    .project-title {
      display: block;
    }
  }
`

const SingleProjectImg = styled(Image)`
  width: 90%;
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}) {
    height: 150px;
  width: 100%;
  max-width: 250px;
    ${props =>
      props.side === "left"
        ? `margin-right: 2rem; order: -1;`
        : `margin-left: 2rem; order: 1;`}
    ${props =>
      props.side === "left" &&
      `
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
      margin-right: 2rem;
    `}
    ${props =>
      props.side === "right" &&
      `
      clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);
      margin-left: 2rem;
    `};
  }
`
