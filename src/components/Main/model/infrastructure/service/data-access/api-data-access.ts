/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICategory } from 'src/components/Categories/model/data/category'
import { DataAccess } from 'src/components/Main/model/data-access'
import { IOrder, ShortOrder } from 'src/components/Menu/model/data/order'
import { IProduct } from 'src/components/Menu/model/data/product'
import HttpClient from 'src/shared/http-client'

export default class ApiDataAccess implements DataAccess {
  private readonly _httpAccess: HttpClient

  constructor() {
    this._httpAccess = new HttpClient()
  }
  async getCategories(signal?: AbortSignal): Promise<ICategory[]> {
    try {
      const url = `categories`

      const axiosResponse = await this._httpAccess.httpRequest({
        requestType: 'GET',
        urlPath: url,
        signal
      })

      const apiResponse = axiosResponse.data as unknown as ICategory[]

      if (axiosResponse.status === 200) {
        return apiResponse
      }
    } catch {}

    return []
  }

  async getProductsByCategory({
    categoryId,
    signal
  }: {
    categoryId: string
    signal?: AbortSignal
  }): Promise<IProduct[]> {
    try {
      const url = `categories/${categoryId}/products`

      const axiosResponse = await this._httpAccess.httpRequest({
        requestType: 'GET',
        urlPath: url,
        signal
      })

      const apiResponse = axiosResponse.data as unknown as IProduct[]

      if (axiosResponse.status === 200) {
        return apiResponse
      }
    } catch {}

    return []
  }

  async getProducts(signal?: AbortSignal): Promise<IProduct[]> {
    try {
      const url = `products`

      const axiosResponse = await this._httpAccess.httpRequest({
        requestType: 'GET',
        urlPath: url,
        signal
      })

      const apiResponse = axiosResponse.data as unknown as IProduct[]

      if (axiosResponse.status === 200) {
        return apiResponse
      }
    } catch {}

    return []
  }

  async createOrder({
    order,
    signal
  }: {
    order: ShortOrder
    signal?: AbortSignal
  }): Promise<IOrder | null> {
    try {
      const url = `orders`

      const axiosResponse = await this._httpAccess.httpRequest({
        requestType: 'POST',
        urlPath: url,
        body: order,
        signal
      })

      const apiResponse = axiosResponse.data as unknown as IOrder

      if (axiosResponse.status === 201) {
        return apiResponse
      }
    } catch {}

    return null
  }
}
