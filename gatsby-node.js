const path = require(`path`)

// # Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/allPosts.js`)

    // Get data from grapql
    const result = await graphql(`
        query {
            allMdx(sort: { fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                        id
                    }
                }
            }
        }  
    `)


    // Create paginated pages for posts
    const postPerPage = 3
    const numPages = Math.ceil(result.data.allMdx.edges.length / postPerPage)


    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: blogPostTemplate,
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1
            }
        })
    })


    // // Create single blog post
    // result.data.allMdx.edges.forEach(edge => {
    //     const slug = edge.node.frontmatter.slug
    //     const id = edge.node.id

    //     createPage({
    //         path: slug,
    //         component: require.resolve(`.src/templates/singlePost.js`),
    //         context: { id }
    //     })
    // })
}