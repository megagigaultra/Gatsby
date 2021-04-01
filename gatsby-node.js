const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            blogs: allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    res.data.blogs.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug
            }
        })
    })

    // Get path to template
    // Get markdown data
    // Create new pages
}