import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            description
            github
            demo
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    slug: project.frontmatter.slug,
    description: project.frontmatter.description,
    demo: project.frontmatter.demo,
    github: project.frontmatter.github,
    image: project.frontmatter.image,
    excerpt: project.excerpt,
  }))
}

export default useProjects
