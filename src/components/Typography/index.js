import React from 'react'

export function Typography({ component: Component, children }) {
  return <Component>{children}</Component>
}

Typography.defaultProps = {
  component: 'p'
}
