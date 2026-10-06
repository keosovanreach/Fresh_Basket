import React from 'react'

function Banner() {
  return (
    <div className="Banner ">
      <div className="flex justify-center items-center text-center h-full flex-col gap-4">
        <p className="text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-bold space-between text-red-800 tracking-[.5em]">
          FRESH & ORGANIC
        </p>
        <p className="text-[30px] sm:text-[1.8em] md:text-[2.5em] lg:text-[2.5em] xl:text-[4em] font-bold text-white">
          Delicious Seasonal Fruits
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4 w-full md:w-auto lg:w-auto xl:w-auto ">
            <button className="px-20 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 sm:px-40 xl:px-10 md:px-45 sm:py-3 md:py-3 lg:py-3 cursor-pointer">
              Fruit Collection
            </button>

            <button className="px-20 py-2 border-2 border-orange-400 text-white rounded-full font-semibold hover:bg-orange-400 hover:text-white transition duration-300 sm:px-40 xl:px-10 md:px-45  sm:py-3 md:py-3 lg:py-3 cursor-pointer ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
