import { ICategory } from 'src/components/Categories/model/data/category'
import { IProduct } from 'src/components/Menu/model/data/product'
import ApiDataAccess from '../model/infrastructure/service/data-access/api-data-access'

export interface IPresenter {
  getCategories(signal?: AbortSignal): Promise<ICategory[]>
  getProductsByCategory({
    categoryId,
    signal
  }: {
    categoryId: string
    signal?: AbortSignal
  }): Promise<IProduct[]>
  getProducts(signal?: AbortSignal): Promise<IProduct[]>
}

export default class PresenterImpl implements IPresenter {
  public readonly _apiDataAccess: ApiDataAccess

  constructor(apiDataAccess: ApiDataAccess) {
    this._apiDataAccess = apiDataAccess
  }

  async getCategories(signal?: AbortSignal | undefined): Promise<ICategory[]> {
    const data = await this._apiDataAccess.getCategories(signal)

    return data
  }

  async getProductsByCategory({
    categoryId,
    signal
  }: {
    categoryId: string
    signal?: AbortSignal | undefined
  }): Promise<IProduct[]> {
    const data = await this._apiDataAccess.getProductsByCategory({
      categoryId,
      signal
    })

    return data
  }

  async getProducts(signal?: AbortSignal | undefined): Promise<IProduct[]> {
    const data = await this._apiDataAccess.getProducts(signal)

    return data
  }
}
