import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const PageRoot = styled.div`
  background: ${props => props.theme.palette.background.default};
  min-height: 100vh;
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.size === 'full' ? '100%' : '1280px')};
  padding: ${props => props.theme.spacing(4)}px;
`

export const Page = React.forwardRef(function Page(props, ref) {
  const { size = 'default', ...other } = props
  return (
    <PageRoot>
      <PageContent size={size} ref={ref} {...other} />
    </PageRoot>
  )
})

Page.propTypes = {
  size: PropTypes.oneOf(['default', 'full'])
}

export default Page
