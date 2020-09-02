import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Title, Button, GithubIcon, DemoIcon } from "../components/common"
import Image from "gatsby-image"
import { breakpoints } from "../utils"
import { css } from "@emotion/core"

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
  const {
    title,
    subtitle,
    tools,
    image,
    demo,
    github,
    previewImages,
  } = project.frontmatter

  return (
    <>
      <div
        css={css`
          grid-row: 1 / 2;
        `}
      ></div>
      <ProjectTitle>
        <Title
          heading="h1"
          fontFamily="Oswald"
          fontWeight="normal"
          triangle={false}
        >
          {title}
        </Title>
        <p>{subtitle}</p>
      </ProjectTitle>
      <ProjectImage>
        <div>
          <Image fluid={image.sharp.fluid} fadeIn />
          <Image fluid={image.sharp.fluid} fadeIn />
        </div>
      </ProjectImage>
      <ProjectLinks>
        <Button
          component="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon width={24} /> Code
        </Button>
        <Button
          component="a"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DemoIcon width={24} /> Demo
        </Button>
      </ProjectLinks>
      <ProjectTechs>
        <Title>Technologies</Title>
        <ul>
          {tools.map(tool => (
            <li key={tool}>- {tool}</li>
          ))}
        </ul>
      </ProjectTechs>
      <ProjectDetails>
        <Title>Details</Title>
        <MDXRenderer>{project.body}</MDXRenderer>
      </ProjectDetails>
      {previewImages.length > 0 && (
        <ProjectPreview>
          <Title>Preview</Title>

          <div>
            {previewImages.map(img => (
              <Image key={Math.random()} fluid={img.sharp.fluid} fadeIn />
            ))}
          </div>
        </ProjectPreview>
      )}
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

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 3 / 3 / 4 / 6;
  }
  h1 {
    text-align: left;
    font-size: calc(1vw + 2rem);
  }
  p {
    font-size: 1.25rem;
  }
`

const ProjectImage = styled.div`
  grid-area: 2/ 1 / 3/ 3;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 3 / 6 / 5 / 10;
  }
  width: 100%;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    > div {
      position: relative;
      width: 100%;
      overflow: visible !important;
      @media (min-width: ${breakpoints.lg}) {
        height: 0;
      }
      &:nth-of-type(1) {
        @media (min-width: ${breakpoints.lg}) {
          flex: 0 1 70%;
          padding-bottom: calc(70% * 9 / 16);
        }
      }
      &:nth-of-type(2) {
        display: none;
        @media (min-width: ${breakpoints.lg}) {
          display: block;
          flex: 0 1 25%;
          padding-bottom: calc(25% * 16 / 10);
        }
      }
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--light);
        border: 3px solid var(--dark);
        width: 100%;
        height: 100%;
        top: -5px;
        left: 6px;
      }
    }
  }
`
const ProjectLinks = styled.div`
  grid-area: 3/ 1 / 4 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 3 / 5 / 6;
  }
  align-self: start;
  display: flex;
  a {
    font-family: "Oswald", "Franklin Gothic Medium", "Arial Narrow", Arial,
      sans-serif;
    margin: 1rem 1.5rem 1rem 0;
    display: flex;
    font-size: 1.25rem;
    padding: 0.5rem 0.7rem;
    svg {
      margin-right: 0.5rem;
    }
  }
`

const ProjectTechs = styled.div`
  grid-area: 4/ 1 / 5 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 5/ 3 / 6 / 7;
    ul {
      text-align: left;
    }
  }
  ul {
    list-style: none;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.6;
  }
`

const ProjectDetails = styled.div`
  grid-area: 5 / 1 / 6 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 5 / 7 / 6 / 10;
  }
  p {
    font-size: 1.25rem;
    text-align: center;
    @media (min-width: ${breakpoints.lg}) {
      text-align: left;
    }
  }
`

const ProjectPreview = styled.div`
  grid-area: 6 / 1 / 7 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 6 / 3 / 7 / 9;
    > div {
      display: flex;
      height: 200px;
      div {
        flex: 1 1 30%;
        margin: 1rem;
        cursor: pointer;
      }
    }
  }
`
const GoBackButton = styled.div`
  grid-area: 7 / 1 / 8 / 3;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
