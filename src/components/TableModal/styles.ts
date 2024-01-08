import { colors } from 'src/components/Main/references'
import styled from 'styled-components/native'

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 24px;
`

export const ModalBody = styled.View`
  background: ${colors['light-1']};
  border-radius: 8px;
  padding: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Form = styled.View`
  margin-top: 32px;
`

export const Input = styled.TextInput`
  background: ${colors.light};
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  margin-bottom: 24px;
`
