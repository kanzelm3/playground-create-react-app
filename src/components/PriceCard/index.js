import React from 'react'
import styled from '@emotion/styled/macro'
import { CardDivider } from '../CardDivider'
import { Typography } from '../Typography'
import { Card, CardMedia, CardContent, CardPrice } from './styles'

export const PlaceholderBackground = styled(CardMedia)`
  background-image: url(/images/dark-tiles.jpg);
  background-size: contain;
  background-repeat: repeat;
`

export const Placeholder = styled.img`
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing(2)}px;
  object-fit: contain;
  box-sizing: border-box;
`

export const PriceCard = function PriceCard({ image: imageProp, heading, subheading, price }) {
  return (
    <Card>
      {imageProp ? (
        <CardMedia image={imageProp} title="Golden Gate Bridge" />
      ) : (
        <PlaceholderBackground>
          <Placeholder alt="test" src="/images/placeholder.png" />
        </PlaceholderBackground>
      )}
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

export default PriceCard
