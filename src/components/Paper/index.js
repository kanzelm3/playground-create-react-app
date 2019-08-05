import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const PaperBase = styled.div(({ theme, square = false, elevation = 1 }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ...(!square && {
    borderRadius: theme.shape.borderRadius
  }),
  ...(elevation && {
    boxShadow: theme.shadows[elevation - 1]
  })
}))

export const Paper = React.forwardRef(function Paper(props, ref) {
  const { component: Component = 'div', ...other } = props
  return <PaperBase as={Component} ref={ref} {...other} />
})

Paper.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool
}

export default Paper
