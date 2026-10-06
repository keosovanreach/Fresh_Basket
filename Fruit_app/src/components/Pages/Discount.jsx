import React from 'react'

function Discount() {
  return (
    <div
      className="w-full py-10 mt-10 mb-25 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/33/28/af/3328af5718cce4f16135b6d02b322330.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-start items-center">
        <div className="flex flex-col items-center text-start  mb-20">
          <h3 className="font-bold text-5xl sm:text-5xl md:text-5xl xl:text-5xl lg:text-5xl ">
            December sale is on!
            <br />
            with big
            <span className="text-orange-400 ml-3">Discount...</span>
          </h3>
          <div className="flex flex-row items-start justify-start pt-5 w-full mt-5">
            <span className="font-serif sm:text-2xl md:text-2xl xl:text-2xl lg:text-2xl ">
              Sale <br />
              Upto
            </span>
            <span className="font-extrabold text-5xl ml-3 sm:text-5xl md:text-5xl xl:text-5xl lg:text-5xl text-orange-400">
              50%
            </span>
            <span className="font-serif sm:text-2xl md:text-2xl xl:text-2xl lg:text-2xl ml-3">
              <br />
              off
            </span>
          </div>
          <div className="flex justify-start items-start w-full pt-10">
            <button
              className="px-6 py-4 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer flex items-center 
            "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount
