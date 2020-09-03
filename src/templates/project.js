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
      <ProjectPreview>
        <Title>Images</Title>

        <div>
          {previewImages.map(img => (
            <Image key={Math.random()} fluid={img.sharp.fluid} fadeIn />
          ))}
        </div>
      </ProjectPreview>
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
  @media (min-height: 768px) {
    margin-top: 2rem;
  }
  margin-top: -1rem;
  align-self: center;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 2 / 3 / 3 / 7;
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
    font-size: 1.25rem;
    @media (min-width: ${breakpoints.lg}) {
      font-size: calc(0.7vw + 0.5rem);
    }
  }
`

const ProjectImage = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 2 / 7 / 4 / 11;
  }
  @media (min-height: 768px) {
    margin-top: 2rem;
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
  grid-area: 3 / 1 / 4 / 3;
  @media (min-width: ${breakpoints.lg}) {
    grid-area: 3 / 3 / 4 / 6;
  }
  align-self: start;
  display: flex;
  justify-content: space-evenly;
  @media (min-height: 768px) {
    margin-top: -2rem;
  }
  a {
    font-family: "Oswald", "Franklin Gothic Medium", "Arial Narrow", Arial,
      sans-serif;
    font-size: 1.5rem;
    margin: 1rem 1.5rem 1rem 0;
    display: flex;
    padding: 0.3rem 0.7rem;
    @media (min-width: ${breakpoints.lg}) {
      font-size: 1rem;
    }
    &:nth-child(2) {
      background: var(--accent);
      ::after {
        border-color: var(--accent);
      }
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`

const ProjectTechs = styled.div`
  grid-area: 4 / 1 / 5 / 3;

  ul {
    list-style: none;
    font-size: calc(1.125rem);

    text-align: center;
    line-height: 1.6;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 5 / 7 / 6 / 11;
    ul {
      text-align: left;
      font-size: calc(0.7vw + 0.5rem);
    }
  }
`

const ProjectDetails = styled.div`
  grid-area: 5 / 1 / 6 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 7 / 5 / 11;
  }
  p {
    font-size: calc(1.125rem);

    text-align: center;
    @media (min-width: ${breakpoints.lg}) {
      font-size: calc(0.7vw + 0.5rem);
      text-align: left;
    }
  }
`

const ProjectPreview = styled.div`
  grid-area: 6 / 1 / 7 / 3;

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 4 / 3 / 6 / 7;
    > div {
      display: flex;
      height: 50%;
      div {
        flex: 0 1 40%;
        margin: 1rem;
        cursor: pointer;
      }
    }
  }
`
const GoBackButton = styled.div`
  grid-area: 7 / 1 / 8 / 3;
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
