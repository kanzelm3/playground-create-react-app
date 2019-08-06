import { useMemo, useState } from 'react'
import orderBy from 'lodash/orderBy'

export const SORT_ORDER_ASC = 'asc'
export const SORT_ORDER_DESC = 'desc'

export function useOrderBy(list, initialSortKey) {
  const [sortKey, setSortKey] = useState(initialSortKey)
  const [sortOrder, setSortOrder] = useState(SORT_ORDER_ASC)
  const orderedList = useMemo(() => {
    return orderBy(list, [sortKey], [sortOrder])
  }, [list, sortKey, sortOrder])
  return [orderedList, { sortKey, setSortKey, sortOrder, setSortOrder }]
}

export default useOrderBy
