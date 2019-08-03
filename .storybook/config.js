import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
// import { themes } from '@storybook/theming'
import requireContext from 'require-context.macro'
import { ThemeProvider } from 'emotion-theming'
import { light } from '../src/themes'
import 'storybook-chromatic'

// Option defaults.
// addParameters({
//   options: {
//     theme: themes.dark
//   }
// })

addDecorator(storyFn => <ThemeProvider theme={light}>{storyFn()}</ThemeProvider>)

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
