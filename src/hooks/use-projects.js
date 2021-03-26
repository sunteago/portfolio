import { graphql, useStaticQuery } from "gatsby"

const useProjects = (language = "en") => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            subtitle
            description
            lang
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

  return data.allMdx.nodes
    .filter(project => project.frontmatter.lang === language)
    .map(project => ({
      title: project.frontmatter.title,
      slug: project.frontmatter.slug,
      subtitle: project.frontmatter.subtitle,
      description: project.frontmatter.description,
      demo: project.frontmatter.demo,
      github: project.frontmatter.github,
      image: project.frontmatter.image,
      excerpt: project.excerpt,
    }))
}

export default useProjects
