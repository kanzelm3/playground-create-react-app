import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled/macro'
import { Card as CardBase } from './index'
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

storiesOf('Components|Card', module)
  .add('content', () => (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Golden Gate Bridge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the
            one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.
          </Typography>
        </CardContent>
      </Card>
    </>
  ))
  .add('media', () => (
    <>
      <Card>
        <CardMedia image="/images/bridge.jpg" title="Golden Gate Bridge" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Golden Gate Bridge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the
            one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.
          </Typography>
        </CardContent>
      </Card>
    </>
  ))
  .add('raised', () => (
    <>
      <Card raised>
        <CardMedia image="/images/bridge.jpg" title="Golden Gate Bridge" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Golden Gate Bridge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the
            one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.
          </Typography>
        </CardContent>
      </Card>
    </>
  ))
  .add('divider', () => (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Dividers
          </Typography>
        </CardContent>
        <CardDivider />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            thickness=2 (default)
          </Typography>
        </CardContent>
        <CardDivider thickness={5} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            thickness=5
          </Typography>
        </CardContent>
        <CardDivider thickness={10} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            thickness=10
          </Typography>
        </CardContent>
      </Card>
    </>
  ))
