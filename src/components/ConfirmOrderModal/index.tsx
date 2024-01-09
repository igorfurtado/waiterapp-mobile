import { Modal } from 'react-native'
import { Text } from 'src/components/Text'
import { useCartItemsStore } from 'src/stores/cart-items-store'
import { useHandleTableNumber } from 'src/stores/table-number-store'
import { CheckCircle } from '../Icons/CheckCircle'
import { colors } from '../Main/view/references'
import { Container, OkButton } from './styles'

type ConfirmOrderModalProps = {
  visible: boolean
  handleCloseModal: () => void
}

const ConfirmOrderModal = ({
  visible,
  handleCloseModal
}: ConfirmOrderModalProps) => {
  const { handleClearCart } = useCartItemsStore()
  const handleSelectTable = useHandleTableNumber()

  const onClose = () => {
    handleClearCart()
    handleCloseModal()
    handleSelectTable('')
  }

  return (
    <Modal visible={visible} animationType='fade'>
      <Container>
        <CheckCircle />
        <Text
          size={20}
          weight='600'
          color={colors.light}
          style={{ marginTop: 12 }}
        >
          Pedido confirmado
        </Text>
        <Text color={colors.light} opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção
        </Text>

        <OkButton onPress={onClose}>
          <Text color={colors.primary} weight='600'>
            Ok
          </Text>
        </OkButton>
      </Container>
    </Modal>
  )
}

export default ConfirmOrderModal
