import styled from '@emotion/styled/macro'

export const Controls = styled.div`
  margin: ${props => props.theme.spacing(2)}px 0;
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: ${props => props.theme.spacing(1)}px;
  }
`

export const Select = styled.select`
  ${props => props.theme.typography.body1}
`
