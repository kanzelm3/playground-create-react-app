import React from 'react'
import times from 'lodash/times'
import CardGrid from '../../components/CardGrid'
import PriceCardSkeleton from '../../components/PriceCard/Skeleton'
import { Controls, Select } from './styles'

const ITEM_COUNT = 5

export const PriceListSkeleton = React.forwardRef(function PriceListSkeleton(props, ref) {
  return (
    <>
      <Controls>
        <Select disabled>
          <option>Sort by...</option>
        </Select>
        <Select disabled>
          <option>&darr;</option>
        </Select>
      </Controls>
      <CardGrid ref={ref} {...props}>
        {times(ITEM_COUNT, i => (
          <PriceCardSkeleton key={i} />
        ))}
      </CardGrid>
    </>
  )
})

export default PriceListSkeleton
