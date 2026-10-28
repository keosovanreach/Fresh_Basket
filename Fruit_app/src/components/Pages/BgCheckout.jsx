
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  updateCartQuantity,
} from "../../utils/cart";

function BgCheckout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
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
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const changeQuantity = (item, quantity) => {
    updateCartQuantity(item, quantity);
    setItems(getCartItems());
  };

  return (
    <div className="bg-white w-full py-7 grid grid-cols-1 mt-5 px-4 sm:px-6 md:px-12 gap-4 md:grid-cols-2">
      {/* Billing, Shipping and Card Details */}
      <div className="w-full min-w-0">
        <div className="w-full shadow rounded-lg overflow-hidden">
          {/* Billing Address */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-amber-400 px-4 py-4 font-bold text-gray-900 cursor-pointer"
          >
            <h1 className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              Billing Address
              <i
                className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} ml-auto`}
              ></i>
            </h1>
          </div>

          {isOpen && (
            <form className="bg-white border-2 border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col gap-4 pt-2">
                <input
                  className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  required
                />

                <input
                  className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  required
                />

                <input
                  className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />

                <textarea
                  className="w-full px-3 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                  id="message"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          )}

          {/* Shipping Address */}
          <div
            onClick={() => setIsShippingOpen(!isShippingOpen)}
            className="bg-amber-400 px-4 py-4 font-bold text-gray-900 mt-4 cursor-pointer"
          >
            <h1 className="flex items-center gap-2">
              <i className="fa-solid fa-truck"></i>
              Shipping Address
              <i
                className={`fa-solid fa-chevron-${isShippingOpen ? "up" : "down"} ml-auto`}
              ></i>
            </h1>
          </div>

          {isShippingOpen && (
            <div className="bg-white border-2 border-gray-200 p-4 sm:p-6">
              <p className="text-gray-600">
                Shipping address will use your billing address.
              </p>
            </div>
          )}

          {/* Card Details */}
          <div
            onClick={() => setIsCardOpen(!isCardOpen)}
            className="bg-amber-400 px-4 py-4 font-bold text-gray-900 mt-4 cursor-pointer"
          >
            <h1 className="flex items-center gap-2">
              <i className="fa-solid fa-credit-card"></i>
              Card Details
              <i
                className={`fa-solid fa-chevron-${isCardOpen ? "up" : "down"} ml-auto`}
              ></i>
            </h1>
          </div>

          {isCardOpen && (
            <div className="bg-white border-2 border-gray-200 p-4 sm:p-6">
              <p className="text-gray-600">
                Please select a supported payment method to continue.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Order Details */}
      <div className="w-full min-w-0">
        <div className="grid grid-cols-2 gap-4 bg-amber-400 px-4 sm:px-6 py-4 rounded-t-lg font-bold text-gray-900">
          <h1>Your Order Details</h1>
          <h1 className="text-right">Price</h1>
        </div>

        <div className="bg-white border-x-2 border-b-2 border-gray-200 rounded-b-lg px-4 sm:px-6 py-5">
          <div className="grid grid-cols-3 pb-3 border-b border-gray-200">
            <h1 className="font-semibold text-gray-700">Product</h1>
            <h1 className="font-semibold text-gray-700">Quantity</h1>
            <h1 className="font-semibold text-gray-700 text-right">
              Total
            </h1>
          </div>

          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div
                className="grid grid-cols-3 gap-2 py-4"
                key={item.id}
              >
                <div>
                  <h1 className="font-bold text-orange-500 text-lg">
                    {item.name}
                  </h1>
               
                </div>

                <p className="text-gray-600">
                  {item.quantity}
                </p>
                <p className="text-right text-gray-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            {items.length === 0 && (
              <p className="py-4 text-center text-gray-500">
                Your cart is empty.
              </p>
            )}
          </div>

          <div className="border-t border-gray-200 mt-2 pt-4 space-y-3">
            <div className="flex justify-between gap-3">
              <h1 className="font-semibold text-gray-700">Subtotal</h1>
              <p className="text-gray-700">
                ${subtotal.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between gap-3">
              <h1 className="font-semibold text-gray-700">Shipping</h1>
              <p className="text-green-600">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </p>
            </div>

            <div className="flex justify-between gap-3 border-t border-gray-200 pt-4">
              <h1 className="text-lg font-bold text-gray-900">
                Total
              </h1>
              <p className="text-lg font-bold text-orange-500">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled={items.length === 0}
          onClick={() => {
            if (items.length === 0) return;
            alert("Please connect your checkout and payment API.");
          }}
          className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg mt-5 mb-5 transition duration-200"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default BgCheckout;
