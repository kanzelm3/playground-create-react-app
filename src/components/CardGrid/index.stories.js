import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled/macro'
import { CardGrid } from './index'
import { Card } from '../Card'
import { CardContent } from '../CardContent'
import { CardMedia as CardMediaBase } from '../CardMedia'
import { Typography } from '../Typography'

const CardMedia = styled(CardMediaBase)`
  height: 140px;
`

storiesOf('Components|CardGrid', module)
  .add('default', () => (
    <CardGrid>
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
    </CardGrid>
  ))
  .add('columnWidth', () => (
    <CardGrid columnWidth={300}>
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
    </CardGrid>
  ))
  .add('gridGap', () => (
    <CardGrid gridGap={3}>
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
    </CardGrid>
  ))
