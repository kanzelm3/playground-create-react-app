import React from 'react'
import PriceCardGridSkeleton from '../../components/PriceCardGrid/Skeleton'

export const PriceListSkeleton = function PriceListSkeleton() {
  return (
    <>
      <PriceCardGridSkeleton count={8} />
    </>
  )
}

export default PriceListSkeleton
