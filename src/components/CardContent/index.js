import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const CardContentRoot = styled.div`
  padding: ${props => props.theme.spacing(2)}px;
  &:last-child {
    padding-bottom: ${props => props.theme.spacing(3)}px;
  }
`

export const CardContent = React.forwardRef(function CardContent(props, ref) {
  const { component: Component = 'div', ...other } = props

  return <CardContentRoot as={Component} ref={ref} {...other} />
})

CardContent.propTypes = {
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType
}

export default CardContent
