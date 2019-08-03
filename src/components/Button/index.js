import styled from '@emotion/styled/macro'
import chroma from 'chroma-js'

export const Button = styled.button`
  position: relative;
  background: ${props => props.theme.palette.primary.default};
  height: 36px;
  color: ${props => props.theme.palette.primary.contrastText};
  padding: ${props => props.theme.spacing(1)}px ${props => props.theme.spacing(3)}px;
  outline: 0;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  box-shadow: ${props => props.theme.shadows[1]};
  transition: background-color 200ms ease-in-out;

  &:hover {
    background: ${props =>
      chroma(props.theme.palette.primary.default)
        .saturate(1)
        .hex()};
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: ${props => props.theme.shadows[2]};
    opacity: 0;
    transition: opacity 275ms cubic-bezier(0.4, 0, 0.6, 1);
  }

  /* Transition to showing the bigger shadow on hover */
  &:hover::after {
    opacity: 1;
  }
`

export default Button
