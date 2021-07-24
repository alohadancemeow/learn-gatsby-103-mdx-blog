import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import { MDXProvider } from '@mdx-js/react'
import { Table } from './src/components'


// # Create GlobalStyle
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`

const compoents = {
    table: Table,
}

// # Wraps everything with ThemeProvider
export const wrapRootElement = ({ element }) => (
    <MDXProvider components={compoents}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    </MDXProvider>
)