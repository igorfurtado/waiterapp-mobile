import { Modal, TouchableOpacity } from 'react-native'
import { colors } from 'src/components/Main/view/references'
import Button from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import useTableModal from './hooks/useTableModal'
import { Form, Header, Input, ModalBody, Overlay } from './styles'

type TableModalProps = {
  visible: boolean
}

export const TableModal = ({ visible }: TableModalProps) => {
  const {
    isAndroid,
    inputValue,
    handleInputValue,
    handleOpenTableModal,
    handleSave
  } = useTableModal()

  return (
    <Modal transparent visible={visible} animationType='fade'>
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={() => handleOpenTableModal(false)}>
              <Close color={colors.dark} />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor={colors.dark}
              keyboardType='number-pad'
              onChangeText={handleInputValue}
            />
            <Button onPress={handleSave} disabled={inputValue.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}

export default TableModal
