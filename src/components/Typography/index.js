import React from 'react'
import PropTypes from 'prop-types'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled/macro'

const colorMappers = {
  inherit: () => 'inherit',
  primary: theme => theme.palette.primary.default,
  secondary: theme => theme.palette.secondary.default,
  textPrimary: theme => theme.palette.text.primary,
  textSecondary: theme => theme.palette.text.secondary,
  accent: theme => theme.palette.accent,
  error: theme => theme.palette.error
}

function getColor(theme, color) {
  const colorMapper = colorMappers[color]
  return colorMapper(theme)
}

const TypographyBase = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'display' && prop !== 'color'
})(
  ({
    align = 'inherit',
    color = 'initial',
    display = 'initial',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    theme,
    variant
  }) => ({
    margin: 0,
    ...(variant !== 'inherit' && theme.typography[variant]),
    ...(variant === 'srOnly' && {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    }),
    ...(color !== 'initial' && {
      color: getColor(theme, color)
    }),
    ...(noWrap && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }),
    ...(gutterBottom && {
      marginBottom: '0.35em'
    }),
    ...(paragraph && {
      marginBottom: 16
    }),
    ...(align !== 'inherit' && {
      textAlign: align
    }),
    ...(display !== 'initial' && {
      display
    })
  })
)

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
}

export const Typography = React.forwardRef(function Typography(props, ref) {
  const { component, variant = 'body1', variantMapping = defaultVariantMapping, ...other } = props

  const Component =
    component ||
    (other.paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) ||
    'span'

  return <TypographyBase as={Component} variant={variant} ref={ref} {...other} />
})

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'accent',
    'error'
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.elementType,
  /**
   * Controls the display type
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
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
  /**
   * We are empirically mapping the variant prop to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: PropTypes.object
}

export default Typography
