import { ICategory } from 'src/components/Categories/model/data/category'
import ApiDataAccess from '../model/infrastructure/service/data-access/api-data-access'
import { IProduct } from 'src/components/Menu/model/data/product'

export interface IPresenter {
  getCategories(signal?: AbortSignal): Promise<ICategory[]>
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

  async getProducts(signal?: AbortSignal | undefined): Promise<IProduct[]> {
    const data = await this._apiDataAccess.getProducts(signal)

    return data
  }
}
