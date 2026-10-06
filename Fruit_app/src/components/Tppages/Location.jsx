import React from 'react'

function Location() {
    return (
      <div className=" bg-gray-900 w-full py-10 md:py-20 ">
        <div className=" flex items-center justify-center text-center">
          <h1 className="text-[25px] sm:text-[1.8em] md:text-[2.5em] lg:text-[2.5em] xl:text-[3em] font-bold text-white flex items-center gap-2">
            <i className ="fa-solid fa-location-pin text-orange-400"></i>
            Find Our Location
          </h1>
        </div>
      </div>
    );
      }

export default Location
