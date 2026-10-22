import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCartItems,
  getCartProductKey,
  removeFromCart,
  updateCartQuantity,
} from "../../utils/cart";

function ProCart() {
  const [items, setItems] = useState(getCartItems);

  useEffect(() => {
    const refreshCart = () => setItems(getCartItems());

    window.addEventListener("cartUpdated", refreshCart);
    window.addEventListener("storage", refreshCart);

    return () => {
      window.removeEventListener("cartUpdated", refreshCart);
      window.removeEventListener("storage", refreshCart);
    };
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const changeQuantity = (item, quantity) => {
    updateCartQuantity(item, quantity);
    setItems(getCartItems());
  };

  const removeItem = (item) => {
    removeFromCart(item);
    setItems(getCartItems());
  };

  if (items.length === 0) {
    return (
      <section className="bg-white w-full px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">
          Add some fresh products to get started.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-6 rounded-full bg-orange-400 px-5 py-3 font-semibold text-white hover:bg-gray-900"
        >
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    
  
    <section className="bg-white w-full py-7 px-4 sm:px-6 md:px-12 mt-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    
        {/* Cart Products */}
        <div className="w-full min-w-0 overflow-x-auto">
          <div className="min-w-[700px] md:min-w-0 md:w-full shadow-md rounded-lg overflow-hidden">
    
            <div className="grid grid-cols-5 gap-4 bg-amber-400 px-4 py-4 rounded-t-lg font-bold text-gray-900">
              <p>Product Image</p>
              <p>Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
    
            {items.map((item) => (
              <div
                key={getCartProductKey(item)}
                className="grid grid-cols-5 gap-4 items-center px-4 py-4 border-b border-gray-200 transition hover:bg-gray-50"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                </div>
    
                <p className="font-semibold text-gray-800">
                  {item.name}
                </p>
    
                <p className="text-gray-700">
                  ${item.price.toFixed(2)}
                </p>
    
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      changeQuantity(item, item.quantity - 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
    
                  <span className="font-medium">
                    {item.quantity}
                  </span>
    
                  <button
                    type="button"
                    onClick={() =>
                      changeQuantity(item, item.quantity + 1)
                    }
                    className="px-3 py-1 bg-amber-400 rounded hover:bg-amber-500 transition"
                  >
                    +
                  </button>
                </div>
    
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
    
                  <button
                    type="button"
                    onClick={() => removeItem(item)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <i className="fa-solid fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
    
          </div>
        </div>
    
        {/* Cart Summary */}
        <div className="w-full min-w-0 h-fit shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 gap-4 bg-amber-400 px-4 py-4 rounded-t-lg font-bold text-gray-900">
            <p>Cart Summary</p>
            <p className="text-right">Price</p>
          </div>
    
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 px-4 py-5 border-b border-gray-200">
            <p className="font-semibold text-gray-700">Subtotal</p>
            <p className="text-right text-gray-700">
              ${subtotal.toFixed(2)}
            </p>
    
            <p className="font-semibold text-gray-700">Shipping</p>
            <p className="text-right text-green-600">Free</p>
    
            <p className="font-bold text-lg text-gray-900">Total</p>
            <p className="text-right font-bold text-lg text-orange-500">
              ${subtotal.toFixed(2)}
            </p>
          </div>
    
          <div className="p-4">
            <Link
              to="/checkout"
              className="block w-full rounded-full bg-amber-400 px-4 py-3 text-center font-bold text-white transition duration-300 hover:bg-gray-900 hover:text-amber-400"
            >
              Proceed to Checkout
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
    
      </div>
    </section>
  
  );
}

export default ProCart;
