import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Title } from "../components/common"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        subtitle
        description
        github
        demo
      }
      excerpt
      body
    }
  }
`

export default function ProjectTemplate({ data: { mdx: project } }) {
  return (
    <Layout pageGrid="projectPage">
      <Title>{project.frontmatter.title}</Title>
      <MDXRenderer>{project.body}</MDXRenderer>
    </Layout>
  )
}
