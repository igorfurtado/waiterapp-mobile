import { DataResponseMeta } from './data-response-meta'
import { ErrorDataResponse } from './error-response'

export type ApiResponse<T> = {
  success: boolean
  data?: T | null
  errors: ErrorDataResponse[]
  meta?: DataResponseMeta | null
}
