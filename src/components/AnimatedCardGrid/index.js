import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import CardGrid from '../CardGrid'

export const AnimatedCardGrid = React.forwardRef(function AnimatedCardGrid(props, ref) {
  const { children, flipKey, ...other } = props
  return (
    <Flipper flipKey={flipKey}>
      <CardGrid ref={ref} {...other}>
        {React.Children.map(children, (child, i) => (
          <Flipped key={child.key} flipId={child.key}>
            {child}
          </Flipped>
        ))}
      </CardGrid>
    </Flipper>
  )
})

export default AnimatedCardGrid
