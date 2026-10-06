import React from "react";

function BgCheckout() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShippingOpen, setIsShippingOpen] = React.useState(false);
  const [isCardOpen, setIsCardOpen] = React.useState(false);

  return (
    <div className="bg-white w-full py-7 grid grid-cols-1 mt-5 px-4 sm:px-6 md:px-12 gap-4 sm:grid-cols-1 md:grid-cols-2">
      <div className="w-full overflow-x-auto">
        <div className="w-full md:w-full shadow">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-amber-400 px-4 py-4 rounded-t-lg font-bold text-gray-900 cursor-pointer"
          >
            <h1 className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              Billing Address
            </h1>
          </div>

          <div className="flex flex-col justify-center">
            {isOpen && (
              <form className="bg-white border-2 border-gray-200 rounded-b-lg p-4 sm:p-6">
                <div className="mb-4 flex flex-col gap-4 pt-5">
                  <input
                    className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                    type="text"
                    id="Name"
                    name="name"
                    placeholder="Name"
                  />

                  <input
                    className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />

                  <input
                    className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                    type="address"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />

                  <input
                    className="w-full px-3 py-4 border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-orange-400"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
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

            <div
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              className="bg-amber-400 px-4 py-4 rounded-[5px] font-bold text-gray-900 mt-5 cursor-pointer"
            >
              <h1 className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                Shipping Address
              </h1>
            </div>
            {isShippingOpen && (
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-4 sm:p-6">
                <h1>No Shipping Address</h1>
              </div>
            )}

            <div
              onClick={() => setIsCardOpen(!isCardOpen)}
              className="bg-amber-400 px-4 py-4 rounded-[5px] font-bold text-gray-900 mt-5 cursor-pointer"
            >
              <h1 className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                Card Details
              </h1>
            </div>
            {isCardOpen && (
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-4 sm:p-6 cursor-pointer">
                <h1>No Card Details</h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 bg-amber-400 px-4 sm:px-6 py-4 rounded-t-lg font-bold text-gray-900">
          <h1>Your Order Details</h1>
          <h1 className="text-right">Price</h1>
        </div>

        <div className="bg-white border-x-2 border-b-2 border-gray-200 rounded-b-lg px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 pb-3 border-b border-gray-200">
            <h1 className="font-semibold text-gray-700">Product</h1>
            <h1 className="font-semibold text-gray-700 text-right">Total</h1>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="grid grid-cols-2 py-4">
              <h1 className="font-medium text-gray-700">Strawberry</h1>
              <p className="text-right text-gray-600">$85.00</p>
            </div>

            <div className="grid grid-cols-2 py-4">
              <h1 className="font-medium text-gray-700">Berry</h1>
              <p className="text-right text-gray-600">$70.00</p>
            </div>

            <div className="grid grid-cols-2 py-4">
              <h1 className="font-medium text-gray-700">Lemon</h1>
              <p className="text-right text-gray-600">$35.00</p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-2 pt-4 space-y-3">
            <div className="flex justify-between">
              <h1 className="font-semibold text-gray-700">Subtotal</h1>
              <p className="text-gray-700">$190.00</p>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-gray-700">Shipping</h1>
              <p className="text-gray-700">$50.00</p>
            </div>

            <div className="flex justify-between border-t border-gray-200 pt-4">
              <h1 className="text-lg font-bold text-gray-900">Total</h1>
              <p className="text-lg font-bold text-orange-500">$250.00</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-lg mt-5 mb-5 transition duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default BgCheckout;
