import React from 'react'
import { Card, CardMedia, CardContent, CardPrice } from './styles'
import { CardDivider } from '../CardDivider'
import { TypographySkeleton } from '../Typography/Skeleton'

export const PriceCardSkeleton = function PriceCardSkeleton() {
  return (
    <Card>
      <CardMedia />
      <CardContent>
        <TypographySkeleton variant="h5" width={150} alternate gutterBottom />
        <TypographySkeleton lines={2} />
      </CardContent>
      <CardDivider />
      <CardPrice>
        <TypographySkeleton variant="h6" align="right" width={80} accent />
      </CardPrice>
    </Card>
  )
}

export default PriceCardSkeleton
