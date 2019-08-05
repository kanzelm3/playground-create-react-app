import React from 'react'
import LoadableContext from './context'

function LoadableProvider({ children }) {
  const [count, setCount] = React.useState(0)
  const isLoading = count > 0

  const registerFallback = React.useCallback(() => {
    setCount(prevCount => prevCount + 1)
    return () => setCount(prevCount => prevCount - 1)
  }, [setCount])

  const value = React.useMemo(
    () => ({
      isLoading,
      registerFallback
    }),
    [isLoading, registerFallback]
  )

  return <LoadableContext.Provider value={value}>{children}</LoadableContext.Provider>
}

export default LoadableProvider
