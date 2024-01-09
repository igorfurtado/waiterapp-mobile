import { ICategory } from 'src/components/Categories/model/data/category'

export interface DataAccess {
  getCategories(signal?: AbortSignal): Promise<ICategory[]>
}
