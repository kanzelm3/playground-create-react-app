import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { light } from './themes'
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
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
