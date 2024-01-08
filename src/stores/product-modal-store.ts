import { create } from 'zustand'

export type ProductModalProps = {
  openProductModal: boolean
  handleOpenProductModal: (openProductModal: boolean) => void
}

const useStore = create<ProductModalProps>((set) => ({
  openProductModal: false,
  handleOpenProductModal: (openProductModal: boolean) => {
    set({
      openProductModal: openProductModal
    })
  }
}))

export const useOpenProductModal = () =>
  useStore((state) => state.openProductModal)
export const useHandleOpenProductModal = () =>
  useStore((state) => state.handleOpenProductModal)
