import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img']

const CardMediaBase = styled.div(({ isMediaComponent }) => ({
  display: 'block',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  ...(isMediaComponent && {
    width: '100%',
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  })
}))

export const CardMedia = React.forwardRef(function CardMedia(props, ref) {
  const { component: Component = 'div', image, src, style, ...other } = props

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1
  const composedStyle =
    !isMediaComponent && image ? { backgroundImage: `url("${image}")`, ...style } : style

  return (
    <CardMediaBase
      as={Component}
      isMediaComponent={isMediaComponent}
      ref={ref}
      style={composedStyle}
      src={isMediaComponent ? image || src : undefined}
      {...other}
    />
  )
})

CardMedia.propTypes = {
  /**
   * Component for rendering image.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string
}

export default CardMedia
