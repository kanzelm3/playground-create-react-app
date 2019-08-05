import React from 'react'
import { createResource } from '../../utils/react-cache'
import PriceCardGrid from '../../components/PriceCardGrid'
import mockItems from './mockItems.json'

export const ListItemsResource = createResource(delay => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockItems), delay)
  })
})

export const PriceList = function PriceList() {
  const listItems = ListItemsResource.read(2000)

  return (
    <PriceCardGrid
      items={listItems.map(({ Heading, Subheading, Price, showBridge }) => ({
        heading: Heading,
        subheading: Subheading,
        price: Price,
        image: showBridge ? '/images/bridge.jpg' : null
      }))}
    />
  )
}

export default PriceList
