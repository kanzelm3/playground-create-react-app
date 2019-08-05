import { createLoadable } from '../../utils/loadable'
import PriceListSkeleton from './PriceListSkeleton'

export default createLoadable(() => import('./PriceList'), PriceListSkeleton)
