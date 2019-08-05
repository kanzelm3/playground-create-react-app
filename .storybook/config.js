import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { ThemeProvider } from 'emotion-theming'
import { light } from '../src/themes'
import 'storybook-chromatic'

addDecorator(storyFn => <ThemeProvider theme={light}>{storyFn()}</ThemeProvider>)

const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
