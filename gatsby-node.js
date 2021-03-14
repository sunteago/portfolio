const layouts = require("./src/constants/layouts")
const translateKeys = require("./src/constants/translate-keys")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
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
      path: `project/${project.frontmatter.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.frontmatter.slug,
        sectionTitle: project.frontmatter.title,
        layout: "projectPage",
      },
    })
  })
}

const setPageInfo = path => {
  switch (path) {
    case "/about/":
      return { layout: layouts.ABOUT, title: translateKeys.ABOUT }
    case "/404/":
    case "/dev-404-page/":
      return { layout: layouts.NOT_FOUND_404 }
    case "/projects/":
      return { layout: layouts.PROJECTS, title: translateKeys.PROJECTS }
    case "/":
    default:
      return { layout: layouts.MAIN }
  }
}

exports.onCreatePage = ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions

  const pageInfo = setPageInfo(page.path)

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      layout: pageInfo.layout,
      sectionTitle: pageInfo.title,
    },
  })
}
