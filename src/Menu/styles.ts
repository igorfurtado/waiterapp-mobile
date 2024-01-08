import styled from 'styled-components/native'

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`

export const ProductDetails = styled.View`
  flex: 1;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`
