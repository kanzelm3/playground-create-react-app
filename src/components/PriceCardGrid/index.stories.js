import React from 'react'
import { storiesOf } from '@storybook/react'
import { PriceCardGrid } from './index'

const mockItems = [
  {
    heading: 'tempor do tempor',
    subheading: 'ipsum et',
    price: 22000
  },
  {
    heading: 'lorem',
    subheading: 'do incididunt',
    price: 33000
  },
  {
    heading: 'ut magna ipsum',
    subheading: 'labore sed',
    price: 14000
  },
  {
    heading: 'lorem incididunt elit',
    subheading: 'aliqua ipsum',
    price: 43000,
    image: '/images/bridge.jpg'
  },
  {
    heading: 'adipiscing ipsum do et do elit eiusmod',
    subheading: 'et dolor',
    price: 27000
  },
  {
    heading: 'magna lorem',
    subheading: 'eisumod do',
    price: 15000
  },
  {
    heading: 'ipsum',
    subheading: 'elit elit',
    price: 43000
  },
  {
    heading: 'sed eiusmod',
    subheading: 'consectetur dolor',
    price: 25000
  },
  {
    heading: 'labore eiusmod elit ipsum aliqua sit lore ipsum',
    subheading: 'aliqua sed',
    price: 37000,
    image: '/images/bridge.jpg'
  },
  {
    heading: 'aliqua ipsum sed ut elit',
    subheading: 'tempor aliqua',
    price: 1000
  },
  {
    heading: 'aliqua',
    subheading: 'elit ut',
    price: 4000
  },
  {
    heading: 'amet adipiscing',
    subheading: 'eisumod sit',
    price: 23000
  }
]

storiesOf('Components|PriceCardGrid', module).add('component', () => (
  <PriceCardGrid items={mockItems} />
))
