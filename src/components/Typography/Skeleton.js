import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import isString from 'lodash/isString'
import map from 'lodash/map'
import kebabCase from 'lodash/kebabCase'
import times from 'lodash/times'
import chroma from 'chroma-js'

const LAST_ROW_WIDTH = 0.85 // 85%
const HEADER_VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

function getPadding({ theme, variant }) {
  const { lineHeight, fontSize } = theme.typography[variant]
  return `${(parseFloat(lineHeight) * parseFloat(fontSize) - parseFloat(fontSize)) / 2}rem`
}

function getWidth({ last, fill, width }) {
  let w = '100%'
  if (fill || width) w = fill ? '100%' : width
  let value = w
  let unit = 'px'
  if (isString(w)) {
    // If width is a string, separate the value from the unit
    const [strValue, strUnit] = w.match(/[a-zA-Z%]+|[0-9.]+/g)
    value = Number(strValue)
    unit = strUnit
  }
  // For last rows, multiply value by 85%
  return `${last ? value * LAST_ROW_WIDTH : value}${unit}`
}

function getMaxWidth({ last }) {
  const value = last ? LAST_ROW_WIDTH * 100 : 100
  return `${value}%`
}

function getHeight({ theme, variant, fill, height }) {
  let heightStr
  // If height is a string, it's good to go... if it's a number, we need to add
  // the px unit to the end so it's valid for CSS
  if (height) heightStr = isString(height) ? height : `${height}px`
  if (fill || heightStr) return fill ? '100%' : heightStr
  return theme.typography[variant].fontSize
}

const Wrapper = styled.div`
  width: ${getWidth};
  ${({ variant, theme }) => variant !== 'inherit' && theme.typography[variant]}
  ${({ gutterBottom }) =>
    gutterBottom && {
      marginBottom: '0.35em'
    }}
  ${({ paragraph }) =>
    paragraph && {
      marginBottom: '0.35em'
    }}
  ${({ align }) => {
    if (!align) return
    if (align === 'center') return 'margin: 0 auto;'
    return `float: ${align};`
  }}
`

const Skeleton = styled.div`
  /* Use padding instead of margin so that vertical margins aren't collapsed. */
  padding: ${getPadding} 0;
  height: ${getHeight};
  max-width: ${getMaxWidth};
  box-sizing: content-box;
  /* Using a :before selector to avoid creating a new child DOM element. */
  &:before {
    content: ' ';
    background: ${props => {
      if (props.accent)
        return chroma(props.theme.palette.accent)
          .alpha(0.35)
          .css()
      return HEADER_VARIANTS.includes(props.variant) ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.15)'
    }};
    height: ${getHeight};
    max-width: 100%;
    display: block;
    border-radius: ${({ theme, variant }) => theme.typography[variant].fontSize};
    /* Loop through style object and convert to CSS. */
    ${props => map(props.styles, (val, key) => `${kebabCase(key)}: ${val};`)}
  }
  /* Don't pass component props down to the div component, only className. */
`

export const TypographySkeleton = ({
  style,
  variant = 'body2',
  lines = 1,
  color,
  fill,
  width,
  inverse,
  align,
  alternate,
  accent,
  ...other
}) => {
  return (
    <Wrapper width={width} align={align} variant={variant} {...other}>
      {times(lines, i => (
        <Skeleton
          key={i}
          styles={style}
          variant={variant}
          last={i === lines - 1 && lines > 1}
          fill={fill}
          inverse={inverse}
          width={width}
          accent={accent}
        />
      ))}
    </Wrapper>
  )
}

TypographySkeleton.propTypes = {
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ]),
  alternate: PropTypes.bool,
  lines: PropTypes.number,
  inverse: PropTypes.bool,
  fill: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

export default TypographySkeleton
