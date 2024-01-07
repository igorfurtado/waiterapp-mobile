import Menu from '../Menu'
import Categories from '../components/Categories'
import Header from '../components/Header'
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
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  )
}

export default Main
