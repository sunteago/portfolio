import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Title } from "../components/common"
import useProjects from "../hooks/use-projects"
import Image from "gatsby-image"
import { clipAtChar, breakpoints } from "../utils"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home() {
  const { t, i18n } = useTranslation()
  const projects = useProjects(i18n.language)

  return (
    <>
      <Title
        heading="h1"
        css={css`
          margin-top: 5rem;
          margin-bottom: 0;
          grid-area: 2 / 1 / 3/ 3;
          @media (min-width: ${breakpoints.md}) {
            margin: 0;
          }
          @media (min-width: ${breakpoints.lg}) {
            grid-area: 2 / 3 / 4 / 10;
          }
          h1 {
            font-family: var(--font-secondary);
            font-size: calc(3rem + 1vw);
            font-weight: 300;
            width: 100%;
          }
        `}
      >
        {t(translateKeys.PROJECTS)}
      </Title>
      <ProjectList>
        {projects.map((project, index) => {
          const oddNum = index % 2 !== 0

          return (
            <React.Fragment key={index}>
              <ProjectItem fade to={`/project/${project.slug}`}>
                <ProjectItemTitle title={project.title} />
                <ProjectItemImage
                  side={oddNum ? "left" : "right"}
                  fluid={project.image.sharp.fluid}
                />

                <ProjectItemDetails side={oddNum ? "right" : "left"}>
                  <ProjectItemTitle
                    title={project.title}
                    side={oddNum ? "right" : "left"}
                  />
                  <p>{project.subtitle}</p>
                  <p>{clipAtChar(project.excerpt)}</p>
                </ProjectItemDetails>
              </ProjectItem>
              <Divider />
            </React.Fragment>
          )
        })}
      </ProjectList>
    </>
  )
}

const ProjectItemTitle = ({ title, side }) => (
  <Title
    className="project-title"
    css={css`
      text-align: ${side};
      h2 {
        font-family: var(--font-primary);
        font-weight: 300;
        font-size: 2rem;
        ${side === "right" ? "margin-left: auto;" : "margin-right: auto;"}
      }
    `}
    triangle={false}
  >
    {title}
  </Title>
)

const ProjectList = styled.div`
  grid-area: 3 / 1 /4 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 3 / 6 / 11;
    overflow-y: scroll;
    padding: 0 2rem 0 0;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background: var(--primary);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--accent);
      border-radius: 6px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--primary);
  }
`

const ProjectItem = styled(AniLink)`
  display: flex;
  color: var(--secondary);
  text-decoration: none;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: ${breakpoints.md}) {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 3rem;
    .project-title {
      display: none;
    }
  }
`

const ProjectItemDetails = styled.div`
  margin-top: 1rem;
  line-height: 1.5;
  flex-grow: 1;

  h2 {
    font-size: 1.5rem;
  }

  .project-title {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    text-align: ${props => (props.side === "left" ? "left" : "right")};

    div {
      ${props =>
        props.side === "right" ? "margin-left: auto;" : "margin-right: auto;"}
    }

    .project-title {
      display: block;
    }
  }
`

const ProjectItemImage = styled(Image)`
  width: 90%;
  margin: 1rem auto 0 auto;
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
const Divider = styled.hr`
  border: 1px solid var(--secondary);
  margin: 1rem 0;
`
