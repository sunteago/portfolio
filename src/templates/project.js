import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        github
        demo
      }
      body
    }
  }
`

export default function ProjectTemplate({ data: { mdx: project } }) {
  return (
    <Layout>
      <h1>{project.frontmatter.title}</h1>
      <MDXRenderer>{project.body}</MDXRenderer>
    </Layout>
  )
}
