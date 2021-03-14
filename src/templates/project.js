import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import IconLink from "../components/common/IconLink"
import { Title, Button, GithubIcon, DemoIcon } from "../components/common"
import Image from "gatsby-image"
import { breakpoints } from "../utils"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        subtitle
        tools
        github
        demo
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        previewImages {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      excerpt
      body
    }
  }
`

export default function ProjectTemplate({ data: { mdx: project } }) {
  const { title, subtitle, tools, image, demo, github } = project.frontmatter
  const { t } = useTranslation()

  return (
    <>
      <ProjectTitle>
        <Title
          heading="h1"
          css={css`
            font-weight: normal;
          `}
          triangle={false}
        >
          {title}
        </Title>
        <p>{subtitle}</p>
      </ProjectTitle>
      <ProjectImage>
        <ul>
          {tools.map(tool => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <Image fluid={image.sharp.fluid} fadeIn />
      </ProjectImage>
      <ProjectDetails>
        <article>
          <Title
            triangle={false}
            css={css`
              font-family: var(--font-secondary);
              h2 {
                font-weight: 400;
                margin-top: 2rem;
                @media (min-width: ${breakpoints.lg}) {
                  margin-top: 0;
                }
              }
            `}
          >
            Description
          </Title>
          <MDXRenderer>{project.body}</MDXRenderer>
        </article>

        <ProjectLinks>
          <IconLink hover href={github}>
            <GithubIcon width={24} />
            <span>{t(translateKeys.SOURCE_CODE)}</span>
          </IconLink>
          <IconLink hover href={demo}>
            <DemoIcon width={24} />
            <span>{t(translateKeys.DEMO)}</span>
          </IconLink>
        </ProjectLinks>
      </ProjectDetails>
      <GoBackButton>
        <Button
          component="Link"
          to="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go home
        </Button>
      </GoBackButton>
    </>
  )
}

const ProjectTitle = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  font-family: var(--font-primary);
  margin-top: 5rem;
  @media (min-height: 768px) {
    margin-top: 2rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 2 / 3 / 4 / 10;
    align-self: center;
  }
  @media (min-height: 768px) {
    align-self: start;
    margin-top: 3rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
    @media (min-width: ${breakpoints.lg}) {
      font-size: calc(3vw + 1rem);
      font-weight: 200;
    }
    margin-bottom: 0;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    @media (min-width: ${breakpoints.lg}) {
      font-size: calc(0.7vw + 0.5rem);
      margin-top: 0;
      margin-left: 0.5rem;
      margin-bottom: 1rem;
    }
  }
`

const ProjectImage = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  max-height: 400px;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 6 / 6 / 11;
    align-self: start;
    height: 100%;
  }
  background: red;
  position: relative;
  ul {
    display: flex;
    margin-bottom: 1rem;
    margin-left: auto;
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    position: absolute;
    bottom: -2.5rem;
    transform: translate(50%, 50%);
    right: 50%;
    @media (min-width: ${breakpoints.md}) {
      top: -2.5rem;
      right: 0;
      bottom: auto;
      transform: none;
    }
    li {
      list-style: none;
      margin-left: 0.5rem;
    }
  }
  > div {
    position: relative;
    overflow: visible !important;
    height: 100%;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      background: var(--secondary);
      border: 3px solid var(--secondary);
      width: 100%;
      height: 100%;
      top: -5px;
      left: 7px;
    }
  }
`

const ProjectDetails = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 3 / 6 / 6;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    flex-grow: 1;
    p {
      font-size: calc(1.125rem);
      text-align: center;
      line-height: 1.6;
      @media (min-width: ${breakpoints.lg}) {
        font-size: calc(0.7vw + 0.5rem);
        text-align: left;
      }
    }
  }
`

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  > a {
    display: flex;
    margin: 0 1rem;
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    @media (min-width: ${breakpoints.lg}) {
      font-size: calc(0.8rem + 0.8vw);
    }
    > div {
      margin-right: 0.3rem;
    }
  }
`

const GoBackButton = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
