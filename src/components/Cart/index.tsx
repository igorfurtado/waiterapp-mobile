import { FlatList, TouchableOpacity } from 'react-native'
import { useCartItemsStore } from 'src/stores/cart-items-store'
import { formatCurrency } from 'src/utils/formatCurrency'
import Button from '../Button'
import { MinusCircle } from '../Icons/MinusCircle'
import { PlusCircle } from '../Icons/PlusCircle'
import { colors } from '../Main/references'
import { Text } from '../Text'
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
  const { cartItems } = useCartItemsStore()

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
                  <TouchableOpacity style={{ marginRight: 20 }}>
                    <PlusCircle />
                  </TouchableOpacity>

                  <TouchableOpacity>
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
                R$120,00
              </Text>
            </>
          ) : (
            <Text color={colors['dark-1']}>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button disabled={cartItems.length === 0}>Confirmar pedido</Button>
      </Summary>
    </>
  )
}

export default Cart
