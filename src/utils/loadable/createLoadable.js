import React from 'react'
import LoadableContext from './context'

function createLoadable(fetchComponent, FallbackComponent) {
  const LazyComponent = React.lazy(fetchComponent)

  function Fallback(props) {
    const { registerFallback } = React.useContext(LoadableContext)
    React.useEffect(() => {
      const unregister = registerFallback()
      return () => unregister()
    }, [registerFallback])
    return <FallbackComponent {...props} />
  }

  return function LoadableComponent(props) {
    // Always show fallback when static rendering skeleton pages
    if (navigator.userAgent.includes('Node.js')) return <Fallback {...props} />
    return (
      <React.Suspense fallback={<Fallback {...props} />}>
        <LazyComponent {...props} />
      </React.Suspense>
    )
  }
}

export default createLoadable
