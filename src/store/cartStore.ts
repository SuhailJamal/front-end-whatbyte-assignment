import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const existingItem = get().cart.find((p) => p.id === item.id);
        if (existingItem) {
          set((state) => ({
            cart: state.cart.map((p) =>
              p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...item, quantity: 1 }],
          }));
        }
      },

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cartStorage",
    },
  ),
);
