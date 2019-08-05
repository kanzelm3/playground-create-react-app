import React from 'react'
import PropTypes from 'prop-types'
import times from 'lodash/times'
import CardGrid from '../CardGrid'
import PriceCardSkeleton from '../PriceCard/Skeleton'

export const PriceCardGridSkeleton = function PriceCardGridSkeleton(props) {
  const { count = 6, ...other } = props
  return (
    <CardGrid {...other}>
      {times(count, i => (
        <PriceCardSkeleton key={i} />
      ))}
    </CardGrid>
  )
}

PriceCardGridSkeleton.propTypes = {
  count: PropTypes.number
}

export default PriceCardGridSkeleton
