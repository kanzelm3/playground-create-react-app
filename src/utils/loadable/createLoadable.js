import React from 'react'
import LoadableContext from './context'

function createLoadable(fetchComponent, FallbackComponent) {
  const LazyComponent = React.lazy(fetchComponent)

  const Fallback = React.forwardRef(function Fallback(props, ref) {
    const { registerFallback } = React.useContext(LoadableContext)
    React.useEffect(() => {
      const unregister = registerFallback()
      return () => unregister()
    }, [registerFallback])
    return <FallbackComponent ref={ref} {...props} />
  })

  return React.forwardRef(function LoadableComponent(props, ref) {
    // Always show fallback when static rendering skeleton pages
    if (navigator.userAgent.includes('Node.js')) return <Fallback ref={ref} {...props} />
    return (
      <React.Suspense fallback={<Fallback ref={ref} {...props} />}>
        <LazyComponent ref={ref} {...props} />
      </React.Suspense>
    )
  })
}

export default createLoadable
