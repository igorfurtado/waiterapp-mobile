import { FlatList } from 'react-native'
import { Text } from 'src/components/Text'
import { products } from 'src/mocks/products'
import { Image, Product, ProductDetails } from './styles'

export const Menu = () => {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{
              uri: `http://localhost:3001/uploads/${product.imagePath}`
            }}
          />
          <ProductDetails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </ProductDetails>
        </Product>
      )}
    />
  )
}

export default Menu
