import { useCallback, useState } from 'react'
import { Platform } from 'react-native'
import { useHandleOpenTableModal } from 'src/stores/table-modal-store'
import { useHandleTableNumber } from 'src/stores/table-number-store'

const useTableModal = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const isAndroid = Platform.OS === 'android'
  const handleOpenTableModal = useHandleOpenTableModal()
  const handleTableNumber = useHandleTableNumber()

  const handleInputValue = useCallback((value: string) => {
    setInputValue(value)
  }, [])

  const handleSave = () => {
    handleTableNumber(inputValue)
    handleOpenTableModal(false)
    setInputValue('')
  }

  return {
    isAndroid,
    inputValue,
    handleInputValue,
    handleOpenTableModal,
    handleSave
  }
}

export default useTableModal
