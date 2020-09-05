exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error creating projects ", result.errors)
  }

  const projects = result.data.allMdx.nodes

  projects.forEach(project => {
    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.frontmatter.slug,
        layout: "projectPage",
      },
    })
  })
}

const setGridLayout = path => {
  switch (path) {
    case "/about/":
      return "about"
    case "/dev-404-page/":
      return "404"
    case "/":
    default:
      return "main"
  }
}

exports.onCreatePage = ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      layout: setGridLayout(page.path),
    },
  })
}
