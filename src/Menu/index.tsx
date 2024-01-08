import { FlatList, TouchableOpacity } from 'react-native'
import { colors } from 'src/Main/references'
import { PlusCircle } from 'src/components/Icons/PlusCircle'
import { Text } from 'src/components/Text'
import { products } from 'src/mocks/products'
import { formatCurrency } from 'src/utils/formatCurrency'
import { Image, Product, ProductDetails, Separator, AddToCartButton } from './styles'

export const Menu = () => {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => {
        return (
          <Product>
            <Image
              source={{
                uri: `http://192.168.1.170:3001/uploads/${product.imagePath}`
              }}
            />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color={colors.dark} style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='600'>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )
      }}
    />
  )
}

export default Menu
