import Button from 'src/components/Button'
import Categories from 'src/components/Categories'
import Header from 'src/components/Header'
import Menu from 'src/components/Menu'
import TableModal from 'src/components/TableModal'
import Cart from '../Cart'
import useMainData from './hooks/use-main-data'
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

const Main = () => {
  const { openTableModal, selectedTable, handleOpenTableModal } = useMainData()

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable ? (
            <Button onPress={() => handleOpenTableModal(true)}>Botão</Button>
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
