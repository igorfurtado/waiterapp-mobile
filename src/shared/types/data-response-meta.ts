export type DataResponseMeta = {
  pagination: Pagination
}

export type Pagination = {
  page: number
  perPage: number
  totalCount: number
  totalPages: number
}
