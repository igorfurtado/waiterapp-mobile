import Menu from 'src/Menu'
import Button from 'src/components/Button'
import Categories from 'src/components/Categories'
import Header from 'src/components/Header'
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

const Main = () => {
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
          <Button>Botão</Button>
        </FooterContainer>
      </Footer>
    </>
  )
}

export default Main
