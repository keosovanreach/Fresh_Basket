import React from 'react'
import { Link } from "react-router-dom";


function categories() {
  return (
    <div className="bg-white w-full py-7 mt-5 px-0 sm:px-4 md:px-12">
      <div className="  flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-4 md:px-12 mt-5 py-5">
        <Link to="/shop">
          <div className="border-2 border-orange-400 text-black font-bold  hover:bg-orange-500 cursor-pointer rounded-full py-2 px-4 text-center">
            All
          </div>
        </Link>
        <Link to="/fruit">
        <div className="border-2 border-orange-400 text-black font-bold  hover:bg-orange-500 cursor-pointer rounded-full py-2 px-4 text-center">
          Fruit
        </div>
        </Link>
         <Link to="/vegetable">
        <div className="border-2 border-orange-400 text-black font-bold  hover:bg-orange-500 cursor-pointer rounded-full py-2 px-4 text-center">
          Vegetables
        </div>
        </Link>
        <Link to="/meat">
        <div className="border-2 border-orange-400 text-black font-bold  hover:bg-orange-500 cursor-pointer rounded-full py-2 px-4 text-center">
          Meat
        </div>
        </Link>
      </div>
    </div>
  );
}

export default categories
