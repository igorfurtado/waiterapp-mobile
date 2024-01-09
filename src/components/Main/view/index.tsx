import { ActivityIndicator } from 'react-native'
import Button from 'src/components/Button'
import Categories from 'src/components/Categories/view'
import Header from 'src/components/Header'
import Menu from 'src/components/Menu'
import TableModal from 'src/components/TableModal'
import Cart from '../../Cart'
import useMainData from './hooks/use-main-data'
import { colors } from './references'

import { Empty } from '../../Icons/Empty'
import { Text } from '../../Text'
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

const Main = () => {
  const {
    openTableModal,
    selectedTable,
    isLoading,
    products,
    categories,
    isProductsLoading,
    handleOpenTableModal,
    handleSelectCategory
  } = useMainData()

  return (
    <>
      <Container>
        <Header />
        {!isLoading ? (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>

            {isProductsLoading ? (
              <CenteredContainer>
                <ActivityIndicator color={colors.primary} size='large' />
              </CenteredContainer>
            ) : products.length > 0 ? (
              <MenuContainer>
                <Menu products={products} />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color={colors.dark} style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        ) : (
          <CenteredContainer>
            <ActivityIndicator color={colors.primary} size='large' />
          </CenteredContainer>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable ? (
            <Button
              onPress={() => handleOpenTableModal(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          ) : (
            <Cart />
          )}
        </FooterContainer>
      </Footer>

      <TableModal visible={openTableModal} />
    </>
  )
}

export default Main
