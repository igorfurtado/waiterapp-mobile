import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'

export const useMainData = () => {
  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
  const handleOpenTableModal = useHandleOpenTableModal()

  return {
    openTableModal,
    selectedTable,
    handleOpenTableModal
  }
}

export default useMainData
