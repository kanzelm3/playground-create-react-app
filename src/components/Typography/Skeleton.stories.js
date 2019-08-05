import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from './index'
import Skeleton from './Skeleton'

function AlternatingComponent(props) {
  const { first, second } = props
  const [displayFirst, setDisplayFirst] = React.useState(true)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayFirst(displayFirst => !displayFirst)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return displayFirst ? first : second
}

storiesOf('Components|Typography/Skeleton', module)
  .add('default', () => {
    return (
      <AlternatingComponent
        first={
          <div style={{ maxWidth: 300 }}>
            <Skeleton variant="h6" width={140} />
            <Skeleton lines={4} />
          </div>
        }
        second={
          <div style={{ maxWidth: 300 }}>
            <Typography variant="h6">Golden Gate Bridge</Typography>
            <Typography>
              The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the
              one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.
            </Typography>
          </div>
        }
      />
    )
  })
  .add('custom styles', () => (
    <Skeleton height={140} width={70} style={{ backgroundColor: '#fd8095', opacity: 1 }} />
  ))
  .add('odd lines with custom width', () => <Skeleton lines={7} width={350} />)
  .add('variants', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 10 }}>
        <Skeleton variant="h1" width={200} gutterBottom />
        <Skeleton variant="h2" width={200} gutterBottom />
        <Skeleton variant="h3" width={200} gutterBottom />
        <Skeleton variant="h4" width={200} gutterBottom />
        <Skeleton variant="h5" width={200} gutterBottom />
        <Skeleton variant="h6" width={200} gutterBottom />
        <Skeleton variant="subtitle1" width={200} gutterBottom />
        <Skeleton variant="subtitle2" width={200} gutterBottom />
        <Skeleton variant="body1" width={200} gutterBottom />
        <Skeleton variant="body2" width={200} gutterBottom />
        <Skeleton variant="button" width={200} gutterBottom />
        <Skeleton variant="caption" width={200} gutterBottom />
        <Skeleton variant="overline" width={200} gutterBottom />
      </div>
      <div>
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum...
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum...
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum...
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum...
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </div>
    </div>
  ))
