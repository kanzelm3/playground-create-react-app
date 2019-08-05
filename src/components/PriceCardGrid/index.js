import React from 'react'
import PropTypes from 'prop-types'
import CardGrid from '../CardGrid'
import PriceCard from '../PriceCard'

export const PriceCardGrid = function PriceCardGrid(props) {
  const { items, ...other } = props
  return (
    <CardGrid {...other}>
      {items.map(item => (
        <PriceCard
          key={`${item.heading}${item.subheading}${item.price}`}
          heading={item.heading}
          subheading={item.subheading}
          price={item.price}
          image={item.image}
        />
      ))}
    </CardGrid>
  )
}

PriceCardGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string
    })
  )
}

export default PriceCardGrid
