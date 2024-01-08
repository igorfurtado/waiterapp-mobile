import { Platform } from 'react-native'

const useTableModal = () => {
  const isAndroid = Platform.OS === 'android'

  return {
    isAndroid
  }
}

export default useTableModal
