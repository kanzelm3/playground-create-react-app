import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { light } from '../../themes'
import { LoadableProvider } from '../../utils/loadable'
import Page from '../../components/Page'
import PriceList from '../../loadables/PriceList'

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <ThemeProvider theme={light}>
        <LoadableProvider>
          <Page>
            <Router>
              <Route exact path="/" component={PriceList} />
            </Router>
          </Page>
        </LoadableProvider>
      </ThemeProvider>
    </>
  )
}

export default App
