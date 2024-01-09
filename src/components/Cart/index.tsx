import { FlatList, TouchableOpacity } from 'react-native'
import { useCartItemsStore } from 'src/stores/cart-items-store'
import { formatCurrency } from 'src/utils/formatCurrency'
import Button from '../Button'
import ConfirmOrderModal from '../ConfirmOrderModal'
import { MinusCircle } from '../Icons/MinusCircle'
import { PlusCircle } from '../Icons/PlusCircle'
import { colors } from '../Main/references'
import { Text } from '../Text'

import { useCallback, useState } from 'react'
import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer
} from './styles'

const Cart = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [confirmOrderModal, setConfirmOrderModal] = useState<boolean>(false)
  const { cartItems, handleAddToCart, handleRemoveFromCard } =
    useCartItemsStore()

  const total = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.product.price
  }, 0)

  const handleConfirmOrder = useCallback((state: boolean) => {
    setConfirmOrderModal(state)
  }, [])

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => {
            return (
              <Item>
                <ProductContainer>
                  <Image
                    source={{
                      uri: `http://192.168.1.170:3001/uploads/${cartItem.product.imagePath}`
                    }}
                  />

                  <QuantityContainer>
                    <Text size={14} color={colors.dark}>
                      {cartItem.quantity}x
                    </Text>
                  </QuantityContainer>

                  <ProductDetails>
                    <Text size={14} weight='600'>
                      {cartItem.product.name}
                    </Text>
                    <Text
                      size={14}
                      color={colors.dark}
                      style={{ marginTop: 4 }}
                    >
                      {formatCurrency(cartItem.product.price)}
                    </Text>
                  </ProductDetails>
                </ProductContainer>
                <Actions>
                  <TouchableOpacity
                    style={{ marginRight: 20 }}
                    onPress={() => handleAddToCart(cartItem.product)}
                  >
                    <PlusCircle />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleRemoveFromCard(cartItem.product)}
                  >
                    <MinusCircle />
                  </TouchableOpacity>
                </Actions>
              </Item>
            )
          }}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color={colors.dark}>Total</Text>
              <Text size={20} weight='600'>
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color={colors['dark-1']}>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          disabled={cartItems.length === 0}
          onPress={() => handleConfirmOrder(true)}
          loading={loading}
        >
          Confirmar pedido
        </Button>
      </Summary>

      <ConfirmOrderModal
        visible={confirmOrderModal}
        handleCloseModal={() => handleConfirmOrder(false)}
      />
    </>
  )
}

export default Cart
