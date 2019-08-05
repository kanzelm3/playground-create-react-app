import React from 'react'
import { storiesOf } from '@storybook/react'
import { PriceCard } from './index'

storiesOf('Components|PriceCard', module).add('component', () => (
  <PriceCard
    heading="Golden Gate Bridge"
    subheading="The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean."
    price="$22,000"
  />
))
