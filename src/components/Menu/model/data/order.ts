import { IProduct } from "./product"

export type IOrder = {
  _id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: IProduct[]
  createdAt: string
}

export type ShortOrder = {
  table: string
  products: {
    product: string
    quantity: number
  }[]
}