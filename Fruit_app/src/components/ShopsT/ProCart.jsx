import React from "react";

function ProCart() {
  return (
    <div className="bg-white w-full py-7 grid grid-cols-1 mt-5 px-4 sm:px-6 md:px-12 gap-4 sm:grid-cols-1 md:grid-cols-2">
    
      <div className="w-full sm:w-full md:w-full overflow-x-auto">
        <div className="min-w-[700px] md:min-w-0 md:w-full shadow">
          <div className="grid grid-cols-5 gap-4 bg-amber-400 px-4 py-4 rounded-t-lg font-bold text-gray-900">
            <p>Product Image</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          <div className="grid grid-cols-5 gap-4 items-center px-4 py-4 border-b border-gray-200">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200"
                alt="MacBook Pro"
                className="w-20 h-20 object-contain rounded"
              />
            </div>

            <p className="font-semibold">MacBook Pro</p>

            <p className="text-gray-700">$999</p>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span>1</span>
              <button className="px-3 py-1 bg-amber-400 rounded">+</button>
            </div>

            <p className="font-semibold">$999</p>
          </div>
        </div>
      </div>
     
      <div className="min-w-full">
        <div className="grid grid-cols-2 gap-4 bg-amber-400 px-4 py-4 rounded-t-lg font-bold text-gray-900">
          <p>Total</p>
          <p>Price</p>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center px-4 py-4 border-b border-gray-200">
          <p className="font-semibold">Subtotal</p>
          <p className="text-gray-700">$999</p>

          <p className="font-semibold">Shipping</p>
          <p className="text-gray-700">$9</p>

          <p className="font-semibold">Total</p>
          <p className="text-gray-700">$999</p>
        </div>

        <div className="px-4 py-4 flex gap-4">
          <button className="px-3 py-2 bg-amber-400 rounded text-white font-bold w-full mt-4">
            Update Cart
          </button>

          <button className="px-3 py-2 bg-amber-400 rounded text-white font-bold w-full mt-4">
            Checkout
          </button>
        </div>

        <div className="px-4 py-4">
          <h1 className="font-bold">Apply Coupon</h1>

          <input
            type="text"
            className="px-3 py-2 border-2 border-amber-400 rounded-l-lg mt-4 w-fill"
            placeholder="Coupon Code"
          />

          <input
            className="px-3 py-2 border-2 border-amber-400 mt-4 w-fill rounded-r-2xl bg-amber-400 text-white cursor-pointer hover:bg-gray-900 hover:text-amber-400 transition duration-300  "
            type="submit"
            value="Apply"
          />
        </div>
      </div>
    </div>
  );
}

export default ProCart;
