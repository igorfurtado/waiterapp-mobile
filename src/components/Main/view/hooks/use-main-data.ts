import { useCallback, useEffect, useState } from 'react'
import { ICategory } from 'src/components/Categories/model/data/category'
import { IProduct } from 'src/components/Menu/model/data/product'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'
import ApiDataAccess from '../../model/infrastructure/service/data-access/api-data-access'
import PresenterImpl from '../../presenter'

export const useMainData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])

  const dataAccess = new ApiDataAccess()
  const presenter = new PresenterImpl(dataAccess)

  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()

  useEffect(() => {
    const controller = new AbortController()

    const fetchAPI = async () => {
      const [categories, products] = await Promise.all([
        presenter.getCategories(controller.signal),
        presenter.getProducts(controller.signal)
      ])

      setCategories(categories)
      setProducts(products)
    }

    fetchAPI().then(() => setIsLoading(false))

    return () => controller.abort()
  }, [])

  const handleSelectCategory = useCallback(
    async ({
      categoryId,
      signal
    }: {
      categoryId: string
      signal?: AbortSignal
    }) => {
      const response = categoryId
        ? await presenter.getProductsByCategory({
            categoryId,
            signal
          })
        : await presenter.getProducts(signal)

      setProducts(response)
    },
    []
  )

  return {
    products,
    categories,
    isLoading,
    openTableModal,
    selectedTable,
    handleOpenTableModal,
    handleSelectCategory
  }
}

export default useMainData
