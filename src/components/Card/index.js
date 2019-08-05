import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import { Paper } from '../Paper'

const CardRoot = styled(Paper)`
  overflow: hidden;
`

export const Card = React.forwardRef(function Card(props, ref) {
  const { raised = false, ...other } = props
  return <CardRoot elevation={raised ? 3 : 1} ref={ref} {...other} />
})

Card.propTypes = {
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
}

export default Card
