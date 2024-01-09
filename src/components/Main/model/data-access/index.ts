import { ICategory } from 'src/components/Categories/model/data/category'
import { IOrder, ShortOrder } from 'src/components/Menu/model/data/order'
import { IProduct } from 'src/components/Menu/model/data/product'

export interface DataAccess {
  getCategories(signal?: AbortSignal): Promise<ICategory[]>
  getProductsByCategory({
    categoryId,
    signal
  }: {
    categoryId: string
    signal?: AbortSignal
  }): Promise<IProduct[]>
  getProducts(signal?: AbortSignal): Promise<IProduct[]>
  createOrder({
    order,
    signal
  }: {
    order: ShortOrder
    signal?: AbortSignal
  }): Promise<IOrder | null>
}
