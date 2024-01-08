import { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { colors } from 'src/Main/references'
import Button from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { useHandleOpenTableModal } from '../stores/open-table-modal-store'
import { useHandleTableNumber } from '../stores/table-number-store'
import useTableModal from './hooks/useTableModal'
import { Form, Header, Input, ModalBody, Overlay } from './styles'

type TableModalProps = {
  visible: boolean
}

export const TableModal = ({ visible }: TableModalProps) => {
  const [tableNumber, setTableNumber] = useState<string>('')

  const { isAndroid } = useTableModal()
  const handleOpenTableModal = useHandleOpenTableModal()
  const handleTableNumber = useHandleTableNumber()

  const handleSave = () => {
    handleTableNumber(tableNumber)
    handleOpenTableModal(false)
  }

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
              onChangeText={setTableNumber}
            />
            <Button onPress={handleSave} disabled={tableNumber.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}

export default TableModal
