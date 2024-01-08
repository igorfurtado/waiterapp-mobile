import { CartItem } from 'src/components/Cart/model/data/cart-item'
import { create } from 'zustand'

export type CartItemsProps = {
  cartItems: CartItem[]
  handleCartItems: (cartItems: CartItem[]) => void
}

const useStore = create<CartItemsProps>((set) => ({
  cartItems: [],
  handleCartItems: (cartItems: CartItem[]) => {
    set({
      cartItems
    })
  }
}))

export const useCartItems = () => useStore((state) => state.cartItems)
export const useHandleCartItems = () =>
  useStore((state) => state.handleCartItems)
