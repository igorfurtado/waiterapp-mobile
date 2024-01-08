import { create } from 'zustand'

export type OpenTableModalProps = {
  openTableModal: boolean
  handleOpenTableModal: (openTableModal: boolean) => void
}

const useStore = create<OpenTableModalProps>((set) => ({
  openTableModal: false,
  handleOpenTableModal: (openTableModal: boolean) => {
    set({
      openTableModal: openTableModal
    })
  }
}))

export const useOpenTableModal = () => useStore((state) => state.openTableModal)
export const useHandleOpenTableModal = () =>
  useStore((state) => state.handleOpenTableModal)
