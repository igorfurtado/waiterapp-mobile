import { CartItem } from 'src/components/Cart/model/data/cart-item'
import { IProduct } from 'src/components/Menu/model/data/product'
import { create } from 'zustand'

export type CartItemsProps = {
  cartItems: CartItem[]
  handleCartItems: (cartItems: CartItem[]) => void
  handleAddToCart: (product: IProduct) => void
}

const useStore = create<CartItemsProps>((set) => ({
  cartItems: [],
  handleCartItems: (cartItems: CartItem[]) => {
    set({
      cartItems
    })
  },
  handleAddToCart: (product: IProduct) => {
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === product._id
      )

      if (itemIndex < 0) {
        return {
          cartItems: [
            ...state.cartItems,
            {
              quantity: 1,
              product
            }
          ]
        }
      } else {
        const newCartItems = [...state.cartItems]
        const item = newCartItems[itemIndex]
        newCartItems[itemIndex] = {
          ...item,
          quantity: item.quantity + 1
        }
        return { cartItems: newCartItems }
      }
    })
  }
}))

export const useCartItemsStore = () => useStore()
