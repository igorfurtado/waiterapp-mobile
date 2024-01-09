/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from 'axios'
import { config } from './config'

type IHttpRequest = {
  requestType: Method
  urlPath: string
  body?: Record<string, any>
  headers?: Record<string, string>
  signal?: AbortSignal
}

class HttpClient {
  private readonly _baseEndpointUrl: string

  constructor() {
    this._baseEndpointUrl = `${config.environment}/` || ''
  }

  private readonly createDefaultConfigRequest = (
    body?: Record<string, any>,
    receivedHeaders?: Record<string, string>
  ) => {
    const headers: Record<string, string> = {}

    if (receivedHeaders) {
      Object.assign(headers, receivedHeaders)
    }

    return body ? { headers, data: body } : { headers }
  }

  async httpRequest<T>({
    requestType,
    urlPath,
    body,
    headers,
    signal
  }: IHttpRequest) {
    const url = `${this._baseEndpointUrl}${urlPath}`

    const defaultConfigRequest = this.createDefaultConfigRequest(body, headers)

    const configRequest = {
      ...defaultConfigRequest,
      method: requestType,
      url,
      signal
    }

    const response =
      await axios.request<AxiosResponse<AxiosResponse<T>>>(configRequest)

    return response
  }
}

export default HttpClient
