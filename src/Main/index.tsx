import Menu from 'src/Menu'
import Button from 'src/components/Button'
import Categories from 'src/components/Categories'
import Header from 'src/components/Header'
import TableModal from 'src/components/TableModal'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/components/store/open-table-modal'
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

const Main = () => {
  const openTableModal = useOpenTableModal()
  const handleOpenTableModal = useHandleOpenTableModal()

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
          <Button onPress={() => handleOpenTableModal(true)}>Botão</Button>
        </FooterContainer>
      </Footer>

      <TableModal visible={openTableModal} />
    </>
  )
}

export default Main
