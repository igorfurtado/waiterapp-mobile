import { Modal } from 'react-native'
import { useHandleOpenProductModal } from 'src/stores/product-modal-store'
import { IProduct } from '../Menu/model/data/product'
import { Text } from '../Text'

type ProductModalProps = {
  visible: boolean
  product: IProduct | null
}

export const ProductModal = ({ visible, product }: ProductModalProps) => {
  const handleProductModal = useHandleOpenProductModal()

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={() => handleProductModal(false)}
    >
      <Text>Teste</Text>
    </Modal>
  )
}

export default ProductModal
