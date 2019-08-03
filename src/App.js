import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { light } from './themes'
import { Button } from './components/Button'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to smile.
          </p>
          <Button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            Learn React
          </Button>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
