const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const detergentiTemplate = path.resolve("./src/templates/detergenti.js")

  const { data, errors } = await graphql(`
    query GetDetergenti {
      detergenti: allContentfulDetergentiMotore {
        nodes {
          slug
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  data.detergenti.nodes.forEach(detergente =>
    createPage({
      path: `detergenti/${detergente.slug}`.toLowerCase(),
      component: path.resolve(`src/templates/detergenti-template.js`),
      context: {
        slug: detergente.slug,
      },
    })
  )
}
