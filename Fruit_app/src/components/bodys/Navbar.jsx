import React, { useState, useEffect } from "react";
import logo from "../../assets/images/LogoFr-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      setCartQty((qty) => qty + 1);
    };

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);
  return (
    <div className="z-50 sticky top-0 w-full h-20 bg-neutral-900 px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="w-16 object-contain">
          <img src={logo} alt="Logo"  />
        </div>
        <div className="  grid-cols-6 gap-4 justify-center items-center hidden md:flex ">
          <Link to="/">
            <div className="text-orange-400 font-bold cursor-pointer">Home</div>
          </Link>
          <Link to="/about">
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
              About
            </div>
          </Link>

          <div className="relative group">
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer ">
              Pages
            </div>
            <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
              <div className="flex flex-col">
                <Link to="/about">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                    About
                  </div>
                </Link>
                <Link to="/cart">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer">
                    Cart
                  </div>
                </Link>
                <Link to="/checkout">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Checkout
                  </div>
                </Link>
                <Link to="/contacts">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Contact
                  </div>
                </Link>
                <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                  News
                </div>
                <Link to="/shop">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Shop
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
              News
            </div>
            <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
              <div className="flex flex-col">
                <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                  News
                </div>
                <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                  Single News
                </div>
              </div>
            </div>
          </div>
          <Link to="/contacts">
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
              Contact
            </div>
          </Link>
          <div className="relative group">
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
              Shop
            </div>
            <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
              <div className="flex flex-col">
                <Link to="/shop">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                    Shop
                  </div>
                </Link>
                <Link to="/checkout">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Checkout
                  </div>
                </Link>
                <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                  Single Product
                </div>
                <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                  Cart
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-white text-xl cursor-pointer hover:text-orange-400"></i>
              </Link>
            {cartQty > 0 && (
              <span className="absolute -top-3 -right-3 bg-orange-400 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartQty}
              </span>
            )}
          </div>
          <i className="fa-solid fa-magnifying-glass text-white text-xl hover:text-orange-400 cursor-pointer"></i>
        </div>
        <div className="flex md:hidden items-center gap-5">
          <i className="fa-solid fa-magnifying-glass text-white text-xl hover:text-orange-400 cursor-pointer"></i>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none cursor-pointer"
          >
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 px-6 absolute top-20 left-0 w-full z-50">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
                Home
              </div>
            </Link>
            <Link to="/about">
              <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
                About
              </div>
            </Link>
            <div className="relative group">
              <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
                Pages
              </div>
              <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <Link to="/about">
                    <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                      About
                    </div>
                  </Link>
                  <Link to="/cart">
                    <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer">
                      Cart
                    </div>
                  </Link>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Checkout
                  </div>
                  <Link to="/contacts">
                    <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                      Contact
                    </div>
                  </Link>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    News
                  </div>
                  <Link to="/shop">
                    <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                      Shop
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
                News
              </div>
              <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                    News
                  </div>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Single News
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
              Contact
            </div>
            <div className="relative group">
              <div className="text-white font-bold hover:text-orange-400 cursor-pointer">
                Shop
              </div>
              <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-amber-50 text-black w-40  rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <Link to="/shop">
                    <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-t-lg">
                      Shop
                    </div>
                  </Link>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Checkout
                  </div>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Single Product
                  </div>
                  <div className="px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer rounded-b-lg">
                    Cart
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-green-500 pt-4">
              <div className="relative">
                <i
                  className="fa-solid fa-cart-shopping text-white text-xl hover:text-orange-400 cursor-pointer"
                  onClick={() => {}}
                ></i>

                {cartQty > 0 && (
                  <span className="absolute -top-3 -right-3 bg-orange-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartQty}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
