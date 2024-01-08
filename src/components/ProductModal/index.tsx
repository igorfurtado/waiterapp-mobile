import { FlatList, Modal } from 'react-native'
import { useHandleOpenProductModal } from 'src/stores/product-modal-store'
import { formatCurrency } from 'src/utils/formatCurrency'
import Button from '../Button'
import { Close } from '../Icons/Close'
import { colors } from '../Main/references'
import { IProduct } from '../Menu/model/data/product'
import { Text } from '../Text'
import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer
} from './styles'

type ProductModalProps = {
  visible: boolean
  product: IProduct | null
}

export const ProductModal = ({ visible, product }: ProductModalProps) => {
  const handleProductModal = useHandleOpenProductModal()

  if (!product) {
    return null
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={() => handleProductModal(false)}
    >
      <Image
        source={{
          uri: `http://192.168.1.170:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={() => handleProductModal(false)}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>
            {product.name}
          </Text>
          <Text color={colors.dark} style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color={colors.dark}>
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              contentContainerStyle={{ gap: 4 }}
              renderItem={({ item: ingredient }) => {
                return (
                  <Ingredient>
                    <Text>{ingredient.icon}</Text>
                    <Text
                      size={14}
                      color={colors.dark}
                      style={{ marginLeft: 20 }}
                    >
                      {ingredient.name}
                    </Text>
                  </Ingredient>
                )
              }}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color={colors.dark}>Preço</Text>
            <Text size={20} weight='600'>
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  )
}

export default ProductModal
