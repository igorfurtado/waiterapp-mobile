import { useState } from 'react'
import { FlatList } from 'react-native'
import { PlusCircle } from 'src/components/Icons/PlusCircle'
import { colors } from 'src/components/Main/view/references'
import { Text } from 'src/components/Text'
import { useCartItemsStore } from 'src/stores/cart-items-store'
import {
  useHandleOpenProductModal,
  useOpenProductModal
} from 'src/stores/product-modal-store'
import { useHandleOpenTableModal } from 'src/stores/table-modal-store'
import { useTableNumber } from 'src/stores/table-number-store'
import { formatCurrency } from 'src/utils/formatCurrency'
import ProductModal from '../ProductModal'
import { IProduct } from './model/data/product'
import {
  AddToCartButton,
  Image,
  Product,
  ProductDetails,
  Separator
} from './styles'

type MenuProps = {
  products: IProduct[]
}

export const Menu = ({ products }: MenuProps) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const selectedTable = useTableNumber()
  const showProductModal = useOpenProductModal()

  const { handleAddToCart } = useCartItemsStore()
  const handleTableModal = useHandleOpenTableModal()
  const handleProductModal = useHandleOpenProductModal()

  const handleOpenModal = (product: IProduct | null) => {
    handleProductModal(true)
    setSelectedProduct(product)
  }

  const addToCart = (product: IProduct) => {
    if (!selectedTable) {
      handleTableModal(true)
    }

    handleAddToCart(product)
  }

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => {
          return (
            <Product onPress={() => handleOpenModal(product)}>
              <Image
                source={{
                  uri: `http://192.168.1.170:3001/uploads/${product.imagePath}`
                }}
              />
              <ProductDetails>
                <Text weight='600'>{product.name}</Text>
                <Text
                  size={14}
                  color={colors.dark}
                  style={{ marginVertical: 8 }}
                >
                  {product.description}
                </Text>
                <Text size={14} weight='600'>
                  {formatCurrency(product.price)}
                </Text>
              </ProductDetails>
              <AddToCartButton onPress={() => addToCart(product)}>
                <PlusCircle />
              </AddToCartButton>
            </Product>
          )
        }}
      />

      <ProductModal visible={showProductModal} product={selectedProduct} />
    </>
  )
}

export default Menu
