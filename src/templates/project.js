import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Title, Button, GithubIcon, DemoIcon } from "../components/common"
import Image from "gatsby-image"
import { breakpoints } from "../utils"

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
      <ProjectTitle>
        <Title
          heading="h1"
          fontFamily="Oswald"
          fontWeight="normal"
          position="A"
          location="B"
        >
          {title}
        </Title>
        <p>{subtitle}</p>
      </ProjectTitle>
      <ProjectImage>
        <Image fluid={image.sharp.fluid} fadeIn />
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
    grid-area: 2 / 3 / 3 / 6;
  }
  h2 {
    text-align: left;
  }
  p {
    font-size: 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
  }
`

const ProjectImage = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 2 / 6 / 3 / 9;
  }
  position: relative;

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
`
const ProjectLinks = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 3 / 3 / 4 / 5;
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
    grid-area: 4 / 4 / 5 / 7;
    ul {
      text-align: left;
    }
  }
`
const ProjectDetails = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 7 / 5 / 10;
  }
  p {
    font-size: 1.25rem;
    text-align: center;
  }
`

const ProjectPreview = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 5 / 4 / 6 / 9;
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
  grid-area: auto;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
