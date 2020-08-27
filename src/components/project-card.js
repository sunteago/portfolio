import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Card = styled.article`
  font-size: 3rem;
  a {
    text-decoration: none;
    color: var(--dark);
  }
`

export default function ProjectCard({ project }) {
  const { title, slug, image } = project

  return (
    <Card>
      <Link to={slug}>{title}</Link>
      <Link to={slug}>
        <Image fluid={image.sharp.fluid} alt={project.title} />
      </Link>
    </Card>
  )
}
