import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { light } from '../../themes'
import { LoadableProvider } from '../../utils/loadable'
import Page from '../../components/Page'
import PricesView from '../Prices'

function App() {
  return (
    <ThemeProvider theme={light}>
      <LoadableProvider>
        <Page>
          <Router>
            <Switch>
              <Route path="/prices" component={PricesView} />
              <Redirect exact from="/" to="/prices" />
            </Switch>
          </Router>
        </Page>
      </LoadableProvider>
    </ThemeProvider>
  )
}

export default App
