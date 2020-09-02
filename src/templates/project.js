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
          <GithubIcon width={27} /> Code
        </Button>
        <Button
          component="a"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DemoIcon width={27} /> Demo
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
        <Button>Go Back</Button>
      </GoBackButton>
    </>
  )
}

const ProjectTitle = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjTitl;
  }
  h1 {
    text-align: left;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
  }
`

const ProjectImage = styled.div`
  width: 100%;
  > div {
    display: flex;
    justify-content: space-between;

    height: 100%;
    width: 100%;
    > div {
      position: relative;
      width: 100%;
      overflow: visible !important;
      &:nth-of-type(1) {
        @media (min-width: ${breakpoints.lg}) {
          flex: 0 1 60%;
        }
      }
      &:nth-of-type(2) {
        display: none;
        @media (min-width: ${breakpoints.lg}) {
          display: block;
          flex: 0 1 30%;
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
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjImg;
  }
`
const ProjectLinks = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjLinks;
  }
  display: flex;
  justify-content: center;
  a {
    font-family: "Oswald", "Franklin Gothic Medium", "Arial Narrow", Arial,
      sans-serif;
    margin: 2rem;
    display: flex;
    font-size: 1.25rem;
    padding: 0.5rem 0.7rem;
    svg {
      margin-right: 0.5rem;
    }
  }
`

const ProjectTechs = styled.div`
  ul {
    list-style: none;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.6;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjTchs;
    ul {
      text-align: left;
    }
  }
`

const ProjectDetails = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjDtls;
  }
  p {
    font-size: 1.25rem;
    text-align: center;
  }
`

const ProjectPreview = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: prjPrev;
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
  div {
    margin: 1rem 0;
  }
`
const GoBackButton = styled.div`
  grid-area: prjGoB;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
