import React from 'react'
import { Link } from "react-router-dom";

function Messages() {
  return (
    <div className=" bg-white w-full py-10 md:py-20 ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center ">
            <h1 className="text-[25px] sm:text-[1.8em] md:text-[1.5em] lg:text-[1.5em] xl:text-[2em] font-bold text-black">
              Have you any question?
            </h1>
            <p className="text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black mt-5 ">
              If you have any questions or inquiries, please feel free to reach
              out to us. Our team is here to assist you and provide the
              information you need. You can contact us through the provided
              channels, and we will respond as soon as possible. Your
              satisfaction is our priority, and we look forward to hearing from
              you!
            </p>
            <div className="flex flex-col justify-center mt-5">
              <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="mb-4 flex flex-row gap-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                    type="text"
                    id="Name"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 flex flex-row gap-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                    type="subject"
                    id="subject"
                    name="subject"
                    placeholder="subject"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center"> 
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">  
            <div className="mb-4 justify-center items-start flex flex-col">
              <h1 className="text-[25px] sm:text-[1.2em] md:text-[1.2em] lg:text-[1.2em] xl:text-[1.2em] font-bold text-black mb-4 flex items-center gap-2">
                <i className="fa-sharp fa-solid fa-map-location-dot text-orange-400"></i>
                Shop Address
              </h1>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black ml-6 ">
                34/8, East Hukupara
              </p>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black mt-2 ml-6">
                Gifirtok, Sadan.
              </p>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black mt-2 ml-6">
                Country Name
              </p>
            </div>
            <div className="mb-4 justify-center items-start flex flex-col">
              <h1 className="text-[25px] sm:text-[1.2em] md:text-[1.2em] lg:text-[1.2em] xl:text-[1.2em] font-bold text-black mb-4 flex items-center gap-2">
                <i className="fa-pixel fa-regular fa-clock text-orange-400"></i>
                Shop Hours
              </h1>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black ml-6">
                MON - FRIDAY: 8 to 9 PM
              </p>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black mt-2 ml-6">
                SAT - SUN: 10 to 8 PM.
              </p>
            </div>
            <div className="mb-4 justify-center items-start flex flex-col">
              <h1 className="text-[25px] sm:text-[1.2em] md:text-[1.2em] lg:text-[1.2em] xl:text-[1.2em] font-bold text-black mb-4 flex items-center gap-2">
                <i className="fa-solid fa-address-book text-orange-400"></i>
                Contact
              </h1>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black ml-6">
                Phone: +00 111 222 3333
              </p>
              <p className=" text-[.8em] sm:text-[.9em] md:text-[1em] lg:text-[1.2em] xl:text-[.8em] font-italic text-black mt-2 ml-6">
                Email: support@fruitkha.com
              </p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Messages
