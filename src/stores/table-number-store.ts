import { create } from 'zustand'

export type TableNumberProps = {
  tableNumber: string
  handleTableNumber: (tableNumber: string) => void
}

const useStore = create<TableNumberProps>((set) => ({
  tableNumber: '',
  handleTableNumber: (tableNumber: string) => {
    set({
      tableNumber: tableNumber
    })
  }
}))

export const useTableNumber = () => useStore((state) => state.tableNumber)
export const useHandleTableNumber = () =>
  useStore((state) => state.handleTableNumber)
