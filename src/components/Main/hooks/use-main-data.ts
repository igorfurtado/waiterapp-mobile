import { useState } from 'react'
import { IProduct } from 'src/components/Menu/model/data/product'
import { products as mockProducts } from 'src/mocks/products'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'

export const useMainData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>(mockProducts)

  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()

  return {
    products,
    isLoading,
    openTableModal,
    selectedTable,
    handleOpenTableModal
  }
}

export default useMainData
