import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Title, Button, GithubIcon, DemoIcon } from "../components/common"
import Image from "gatsby-image"

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
    github,
    demo,
    previewImages,
  } = project.frontmatter

  return (
    <Layout pageGrid="projectPage">
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
        <Button>
          <GithubIcon width={27} /> Code
        </Button>
        <Button>
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
      <ProjectPreview>
        <Title>Preview</Title>

        {previewImages.map(img => (
          <article key={Math.random()}>
            <Image fluid={img.sharp.fluid} fadeIn />
          </article>
        ))}
      </ProjectPreview>
      <GoBackButton>
        <Button>Go Back</Button>
      </GoBackButton>
    </Layout>
  )
}

const ProjectTitle = styled.div`
  grid-area: prjTitl;
  h2 {
    text-align: left;
  }
  p {
    font-size: 1.5rem;
  }
`

const ProjectImage = styled.div`
  grid-area: prjImg;
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
  grid-area: prjLinks;
  display: flex;
  justify-content: center;
  button {
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
  grid-area: prjTchs;
  ul {
    list-style: none;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.6;
  }
`
const ProjectDetails = styled.div`
  grid-area: prjDtls;
  p {
    font-size: 1.5rem;
    text-align: center;
  }
`

const ProjectPreview = styled.div`
  grid-area: prjPrev;
  article {
    margin: 1rem 0;
  }
`
const GoBackButton = styled.div`
  grid-area: prjGoB;
`
