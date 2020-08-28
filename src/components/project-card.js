import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { GithubIcon } from "./common"

const Card = styled.article`
  font-size: 1.75rem;
  font-family: Oswald, "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  text-align: center;
  a {
    text-decoration: none;
    margin-top: 1rem;
    display: block;
    color: var(--dark);
  }
  max-width: 100%;
`
const ImageLink = styled(Link)`
  position: relative;

  ::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(var(--dark), var(--dark));
    filter: opacity(30%);
    z-index: 10;
    transition: all 0.2s ease-in;
  }
  &:hover::after {
    filter: opacity(50%);
  }
`
const Content = styled.p`
  font-family: Raleway, sans-serif;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default function ProjectCard({ project }) {
  const { title, slug, image, description, github, demo } = project

  return (
    <Card>
      <Link to={slug}>{title}</Link>
      <ImageLink to={slug}>
        <Image fluid={image.sharp.fluid} alt={project.title} />
      </ImageLink>
      <Content>{description}</Content>
      <IconsContainer>
        <GithubIcon link={github} />
        <GithubIcon link={demo} />
      </IconsContainer>
    </Card>
  )
}
