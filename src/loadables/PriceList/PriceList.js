import React, { useCallback, useState } from 'react'
import take from 'lodash/take'
import { createResource } from '../../utils/react-cache'
import AnimatedCardGrid from '../../components/AnimatedCardGrid'
import Button from '../../components/Button'
import PriceCard from '../../components/PriceCard'
import useOrderBy, { SORT_ORDER_ASC, SORT_ORDER_DESC } from '../../hooks/useOrderBy'
import mockItems from './mockItems.json'
import { Controls, Select } from './styles'

export const ListItemsResource = createResource(delay => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockItems), delay)
  })
})

export const PriceList = React.forwardRef(function PriceList(props, ref) {
  const { itemsPerRow } = props
  // simulate fetch from server
  const listItems = ListItemsResource.read(1000)

  /* list sorting */
  const [orderedListItems, orderByProps] = useOrderBy(listItems, 'Heading')
  const { setSortKey, sortKey, setSortOrder, sortOrder } = orderByProps
  const flipKey = `${sortKey}${sortOrder}`

  /* pagination */
  const [page, setPage] = useState(1)
  const loadMore = useCallback(() => {
    setPage(page => page + 1)
  }, [])
  const showLoadMore = itemsPerRow && page < Math.ceil(orderedListItems.length / itemsPerRow)

  const visibleListItems = itemsPerRow
    ? take(orderedListItems, itemsPerRow * page)
    : orderedListItems

  return (
    <>
      <Controls>
        <Select
          aria-label="Sort by"
          value={sortKey}
          onChange={event => setSortKey(event.target.value)}
        >
          <option value="title">Title</option>
          <option value="subtitle">Subtitle</option>
          <option value="price">Price</option>
        </Select>
        <Select
          aria-label="Sort order"
          value={sortOrder}
          onChange={event => setSortOrder(event.target.value)}
        >
          <option aria-label="Ascending" value={SORT_ORDER_ASC}>
            &darr;
          </option>
          <option aria-label="Descending" value={SORT_ORDER_DESC}>
            &uarr;
          </option>
        </Select>
      </Controls>
      <AnimatedCardGrid ref={ref} flipKey={flipKey}>
        {visibleListItems.map(({ title, subtitle, price }) => {
          const itemKey = `${title}${subtitle}${price}`
          return <PriceCard key={itemKey} heading={title} subheading={subtitle} price={price} />
        })}
      </AnimatedCardGrid>
      {showLoadMore && (
        <Controls>
          <Button variant="contained" color="primary" onClick={() => loadMore()}>
            See More
          </Button>
        </Controls>
      )}
    </>
  )
})

export default PriceList
