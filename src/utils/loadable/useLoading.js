import React from 'react'
import LoadableContext from './context'

function useLoading() {
  const { isLoading } = React.useContext(LoadableContext)
  return isLoading
}

export default useLoading
