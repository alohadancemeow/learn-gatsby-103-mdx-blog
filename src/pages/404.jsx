import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, FeatureImage } from '../components'
import { H1 } from '../elements'

const NotfoundPage = ({ data }) => {
    return (
        <Container>
            <FeatureImage fixed={data.imageSharp.fixed} />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    It's nothing here, fxxk off!
                </H1>
            </Content>

        </Container>
    )
}

export default NotfoundPage


// # Graphql
export const notFoundQuery = graphql`
    query NotfoundQuery {
        imageSharp(fixed: {originalName: {eq: "3.jpg"}}) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
`