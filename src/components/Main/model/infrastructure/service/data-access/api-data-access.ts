/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICategory } from 'src/components/Categories/model/data/category'
import { DataAccess } from 'src/components/Main/model/data-access'
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
}
