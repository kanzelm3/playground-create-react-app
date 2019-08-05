import React from 'react'
import styled from '@emotion/styled/macro'

export const CardDividerRoot = styled.div`
  width: calc(100% - ${props => props.theme.spacing(4)}px);
  margin: 0 auto;
  height: ${props => props.thickness}px;
  background: #ddd;
`

export const CardDivider = React.forwardRef(function CardDivider(props, ref) {
  const { thickness = 2, ...other } = props
  return <CardDividerRoot ref={ref} thickness={thickness} {...other} />
})

export default CardDivider
