import { useEffect, useState } from 'react'
import { ICategory } from 'src/components/Categories/model/data/category'
import { IProduct } from 'src/components/Menu/model/data/product'
import { products as mockProducts } from 'src/mocks/products'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'
import ApiDataAccess from '../../model/infrastructure/service/data-access/api-data-access'
import PresenterImpl from '../../presenter'

export const useMainData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>(mockProducts)
  const [categories, setCategories] = useState<ICategory[]>([])

  const dataAccess = new ApiDataAccess()
  const presenter = new PresenterImpl(dataAccess)

  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()

  useEffect(() => {
    const controller = new AbortController()

    const fetchAPI = async () => {
      setIsLoading(true)
      await presenter.getCategories(controller.signal).then((data) => {
        setCategories(data)
      })
    }

    fetchAPI().then(() => setIsLoading(false))

    return () => controller.abort()
  }, [])

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
