import { FlatList } from 'react-native'
import { useCartItems } from 'src/stores/cart-items-store'
import { Actions, Image, Item, ProductContainer } from './styles'

const Cart = () => {
  const cartItems = useCartItems()

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      renderItem={({ item: cartItem }) => {
        return (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `http://192.168.1.170:3001/uploads/${cartItem.product.imagePath}`
                }}
              />
            </ProductContainer>
            <Actions></Actions>
          </Item>
        )
      }}
    />
  )
}

export default Cart
