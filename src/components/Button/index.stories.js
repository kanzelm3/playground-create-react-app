import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './index'

storiesOf('Components|Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
