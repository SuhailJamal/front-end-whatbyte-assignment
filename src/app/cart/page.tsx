"use client";
import { useCartStore } from "@/store/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-500">${item.price}</div>
              <div className="flex items-center gap-2 mt-2">
                <label htmlFor={`qty-${item.id}`}>Qty:</label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <button
                  className="ml-4 text-red-600 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <div className="text-xl font-bold">Total: ${total}</div>
      </div>
    </div>
  );
}
