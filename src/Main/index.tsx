import Menu from 'src/Menu'
import Button from 'src/components/Button'
import Categories from 'src/components/Categories'
import Header from 'src/components/Header'
import TableModal from 'src/components/TableModal'
import {
  useHandleOpenTableModal,
  useOpenTableModal
} from 'src/components/stores/open-table-modal-store'
import { useTableNumber } from 'src/components/stores/table-number-store'
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

const Main = () => {
  const openTableModal = useOpenTableModal()
  const selectedTable = useTableNumber()
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
          {!selectedTable && (
            <Button onPress={() => handleOpenTableModal(true)}>Botão</Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal visible={openTableModal} />
    </>
  )
}

export default Main
