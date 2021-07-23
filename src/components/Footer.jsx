import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    FooterWrapper,
    FooterSocialWrapper,
    FooterSocialIcons,
    P
} from '../elements'

export const Footer = () => {

    // # Get icons
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            github: file(relativePath: {eq: "github.svg"}) {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.facebook.publicURL} alt="facebook" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.instagram.publicURL} alt="instagram" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.twitter.publicURL} alt="twitter" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.github.publicURL} alt="github" />
                    </a>
                </FooterSocialIcons>
                <P size='xSmall' color='dark3'>
                    2021. All rights reserved.
                </P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}
