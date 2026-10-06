import React from 'react' 
 
function Promotions() { 
  return (
    <div className="bg-gray-100 w-full py-10 mt-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-10 py-10 ">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-1 ">
            <span className="w-30 h-30 flex flex-col items-center justify-center rounded-full bg-red-400 text-black border-4 border-amber-400 ">
              <h1 className="font-bold text-2xl">30%</h1>
              <p className="text-xs">off per kg</p>
            </span>
          </div>
          <img
            className="w-[500px] object-contain"
            src="src/assets/images/promo.png"
            alt="Promotions"
          />
        </div>
        <div className="grid grid-col items-start justify-start">
          <div className="flex flex-col ">
            <h1 className="font-extrabold text-5xl sm:text-5xl md:text-5xl xl:text-5xl lg:text-5xl  text-orange-400">
              Deal <span className="text-black">of the month</span>
            </h1>
            <p className="font-serif text-xl sm:text-xl md:text-xl xl:text-xl lg:text-xl text-black pt-5">
              HIKAN STRAWBERRY
            </p>
            <div className="flex flex-col ">
              <p className="font-serif text-lg sm:text-lg md:text-lg xl:text-lg lg:text-lg text-black pt-5">
                Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
                ullam similique! Beatae, minima quisquam molestias facere ea.
                Perspiciatis unde omnis iste natus error sit voluptatem accusant
              </p>
            </div>
            <div className="flex flex-row items-center gap-1 pt-5">
              <div className="flex items-center gap-4">
                <span className="w-20 h-20 flex flex-col items-center justify-center border-3 border-orange-400">
                  <h1 className="font-bold text-4xl text-orange-400">00</h1>
                  <p className="text-xs">days</p>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 h-20 flex flex-col items-center justify-center border-3 border-orange-400">
                  <h1 className="font-bold text-4xl text-orange-400">00</h1>
                  <p className="text-xs">days</p>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 h-20 flex flex-col items-center justify-center border-3 border-orange-400">
                  <h1 className="font-bold text-4xl text-orange-400">00</h1>
                  <p className="text-xs">days</p>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 h-20 flex flex-col items-center justify-center border-3 border-orange-400">
                  <h1 className="font-bold text-4xl text-orange-400">00</h1>
                  <p className="text-xs">days</p>
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center pt-10">
              <button
                className="px-4 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer flex items-center gap-2
            "
              >
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Promotions 