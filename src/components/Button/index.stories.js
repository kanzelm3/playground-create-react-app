import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled/macro'
import { Button } from './index'

const Section = styled.div`
  margin: 16px;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

storiesOf('Components|Button', module)
  .add('colors', () => (
    <Section>
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
    </Section>
  ))
  .add('variants', () => (
    <>
      <Section>
        <Button>Text Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="contained">Contained Button</Button>
      </Section>
      <Section>
        <Button color="primary">Text Button</Button>
        <Button color="primary" variant="outlined">
          Outlined Button
        </Button>
        <Button color="primary" variant="contained">
          Contained Button
        </Button>
      </Section>
      <Section>
        <Button color="secondary">Text Button</Button>
        <Button color="secondary" variant="outlined">
          Outlined Button
        </Button>
        <Button color="secondary" variant="contained">
          Contained Button
        </Button>
      </Section>
    </>
  ))
