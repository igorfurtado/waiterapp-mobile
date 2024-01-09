import { TouchableOpacity } from 'react-native'
import { colors } from 'src/components/Main/view/references'
import { useCartItemsStore } from 'src/stores/cart-items-store'
import {
  useHandleTableNumber,
  useTableNumber
} from '../../stores/table-number-store'
import { Text } from '../Text'
import { Container, Content, OrderHeader, Table } from './styles'

export const Header = () => {
  const selectedTable = useTableNumber()
  const handleSelectTable = useHandleTableNumber()
  const { handleClearCart } = useCartItemsStore()

  const handleCancelOrder = () => {
    handleSelectTable('')
    handleClearCart()
  }

  return (
    <Container>
      {!selectedTable ? (
        <>
          <Text size={14} opacity={0.9}>
            Bem-vindo(a) ao
          </Text>
          <Text size={24} weight='700'>
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      ) : (
        <Content>
          <OrderHeader>
            <Text size={24} weight='600'>
              Pedido
            </Text>
            <TouchableOpacity onPress={handleCancelOrder}>
              <Text weight='600' size={14} color={colors.primary}>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color={colors.dark}>Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  )
}

export default Header
