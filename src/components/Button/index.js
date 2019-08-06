import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import chroma from 'chroma-js'

const ButtonBase = styled.button`
  border: none;
  outline: 0;
  margin: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  ${props => props.theme.typography.button}
  box-sizing: border-box;
  min-width: 64px;
  padding: 6px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  color: ${props => props.theme.palette.text.primary};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${({ color, variant, theme }) => {
    switch (variant) {
      case 'text':
        let textColor
        switch (color) {
          case 'primary':
            textColor = theme.palette.primary.default
            break
          case 'secondary':
            textColor = theme.palette.secondary.default
            break
          default:
            textColor = theme.palette.text.primary
            break
        }
        const backgroundColor = chroma(textColor)
          .alpha(0.08)
          .css()
        return {
          color: textColor,
          padding: '6px 8px',
          '&:hover': {
            backgroundColor,
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        }
      case 'outlined':
        let borderColor
        switch (color) {
          case 'primary':
            borderColor = theme.palette.primary.default
            break
          case 'secondary':
            borderColor = theme.palette.secondary.default
            break
          default:
            return {
              padding: '5px 16px',
              border: `1px solid ${
                theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
              }`,
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.26)'
              }
            }
        }
        return {
          color: borderColor,
          border: `1px solid ${chroma(borderColor)
            .alpha(0.5)
            .css()}`,
          '&:hover': {
            border: `1px solid ${borderColor}`,
            backgroundColor: chroma(borderColor)
              .alpha(0.08)
              .css(),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        }
      case 'contained': {
        let textColor
        let backgroundColor
        let backgroundHoverColor
        switch (color) {
          case 'primary':
            textColor = theme.palette.primary.contrastText
            backgroundColor = theme.palette.primary.default
            backgroundHoverColor = theme.palette.primary.variant
            break
          case 'secondary':
            textColor = theme.palette.secondary.contrastText
            backgroundColor = theme.palette.secondary.default
            backgroundHoverColor = theme.palette.secondary.variant
            break
          default:
            textColor = theme.palette.text.primary
            backgroundColor = '#e0e0e0'
            backgroundHoverColor = '#d5d5d5'
        }
        return {
          color: textColor,
          backgroundColor,
          boxShadow: theme.shadows[0],
          '&:focus': {
            boxShadow: theme.shadows[1]
          },
          '&:active': {
            boxShadow: theme.shadows[2]
          },
          '&:disabled': {
            color: 'rgba(0, 0, 0, 0.26)',
            boxShadow: theme.shadows[0],
            backgroundColor: 'rgba(0, 0, 0, 0.12)'
          },
          '&:hover': {
            backgroundColor: backgroundHoverColor,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor
            },
            '&$disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)'
            }
          }
        }
      }
      default:
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return {
          padding: '4px 8px',
          fontSize: '0.8125rem'
        }
      case 'large':
        return {
          padding: '8px 24px',
          fontSize: '0.9375rem'
        }
      default:
        break
    }
  }}

  &:hover {
    text-decoration: none;
    @media (hover: none) {
      background-color: transparent;
    }
    &:disabled {
      background-color: transparent;
    }
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.26);
    pointer-events: none;
    cursor: default;
  }
`

const ButtonLabel = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`

export const Button = React.forwardRef(function Button(props, ref) {
  const { children, component, href, variant = 'text', size = 'medium', ...other } = props

  const Component = component || (href ? 'a' : 'button')

  return (
    <ButtonBase as={Component} ref={ref} variant={variant} size={size} {...other}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonBase>
  )
})

Button.propTypes = {
  component: PropTypes.elementType,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
}

export default Button
