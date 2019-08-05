import React from 'react'
import styled from '@emotion/styled/macro'
import { Card as CardBase } from '../Card'
import { CardContent } from '../CardContent'
import { CardDivider } from '../CardDivider'
import { CardMedia as CardMediaBase } from '../CardMedia'
import { Typography } from '../Typography'

const Card = styled(CardBase)`
  max-width: 345px;
`

const CardMedia = styled(CardMediaBase)`
  height: 140px;
`

const CardPrice = styled.div`
  padding: ${props => props.theme.spacing(1)}px;
`

export const PriceCard = function PriceCard({ heading, subheading, price }) {
  return (
    <Card>
      <CardMedia image="/images/bridge.jpg" title="Golden Gate Bridge" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subheading}
        </Typography>
      </CardContent>
      <CardDivider />
      <CardPrice>
        <Typography variant="h6" color="accent" component="p" align="right">
          {price}
        </Typography>
      </CardPrice>
    </Card>
  )
}
