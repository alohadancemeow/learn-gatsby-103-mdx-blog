import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { FeatureImageWrapper } from '../elements'

export const FeatureImage = () => {

    // # Get image
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "2.jpg"}}) {
                fixed(quality: 100) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper>
            <Img
                fixed={data.imageSharp.fixed}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}
            />
        </FeatureImageWrapper>
    )
}
