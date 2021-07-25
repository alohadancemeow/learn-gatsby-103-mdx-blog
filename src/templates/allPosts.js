import React from 'react'
import { graphql } from 'gatsby'
import { H1, P } from '../elements'
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination,
    Seo
} from '../components'

const allPosts = ({ pageContext, data }) => {

    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1
        ? '/'
        : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`
    const posts = data.allMdx.edges

    return (
        <Container>
            <Seo />
            <FeatureImage />
            <Content>
                <H1 textAlign='center' margin='0 0 1rem 0'>
                    Lorem, ipsum.
                </H1>
                <P textAlign='center' color='dark2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora ut quibusdam delectus quisquam, dolor asperiores nemo recusandae a doloribus!
                </P>

                {
                    posts.map(post => (
                        <ContentCard
                            key={post.node.frontmatter.slug}
                            date={post.node.frontmatter.date}
                            title={post.node.frontmatter.title}
                            excerpt={post.node.frontmatter.excerpt}
                            slug={post.node.frontmatter.slug}
                        />
                    ))
                }

            </Content>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allPosts


// # Graphql
export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(limit: $limit, skip: $skip, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        excerpt
                        slug
                        title
                    }
                }
            }
        }
    }
`
