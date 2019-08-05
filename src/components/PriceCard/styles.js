import styled from '@emotion/styled/macro'
import { Card as CardBase } from '../Card'
import { CardContent as CardContentBase } from '../CardContent'
import { CardMedia as CardMediaBase } from '../CardMedia'

export const Card = styled(CardBase)`
  display: flex;
  flex-direction: column;
`

export const CardMedia = styled(CardMediaBase)`
  height: 160px;
  background-color: rgba(0, 0, 0, 0.15);
`

export const CardContent = styled(CardContentBase)`
  flex: 1;
`

export const CardPrice = styled.div`
  padding: ${props => props.theme.spacing(1)}px;
`
