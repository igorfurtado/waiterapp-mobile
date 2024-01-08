import { useEffect } from 'react'
import { products } from 'src/mocks/products'
import { useHandleCartItems } from 'src/stores/cart-items-store'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'

export const useMainData = () => {
  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()
  const handleCartItems = useHandleCartItems()

  useEffect(() => {
    handleCartItems([
      {
        quantity: 1,
        product: products[0]
      },
      {
        quantity: 2,
        product: products[1]
      }
    ])
  }, [])

  return {
    openTableModal,
    selectedTable,
    handleOpenTableModal
  }
}

export default useMainData
