import { useState } from 'react'
import { ICategory } from 'src/components/Categories/model/data/category'
import { IProduct } from 'src/components/Menu/model/data/product'
import { categories as mockCategories } from 'src/mocks/categories'
import { products as mockProducts } from 'src/mocks/products'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'

export const useMainData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>(mockProducts)
  const [categories, setCategories] = useState<ICategory[]>(mockCategories)

  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()

  return {
    products,
    categories,
    isLoading,
    openTableModal,
    selectedTable,
    handleOpenTableModal
  }
}

export default useMainData
