import { useCallback, useLayoutEffect, useState } from 'react'
import usePrevious from './usePrevious'

export function useGridColumns({ liveMeasure = true } = {}) {
  const [gridColumns, setGridColumns] = useState(null)
  const [node, setNode] = useState(null)
  const prevGridColumns = usePrevious(gridColumns)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          const { gridTemplateColumns } = window.getComputedStyle(node)
          const gridColumns = gridTemplateColumns.split(' ').length
          if (gridColumns !== prevGridColumns) {
            setGridColumns(gridColumns)
          }
        })
      measure()

      if (liveMeasure) {
        window.addEventListener('resize', measure)
        window.addEventListener('scroll', measure)

        return () => {
          window.removeEventListener('resize', measure)
          window.removeEventListener('scroll', measure)
        }
      }
    }
  }, [node, liveMeasure, prevGridColumns])

  return [gridColumns, ref, node]
}

export default useGridColumns
