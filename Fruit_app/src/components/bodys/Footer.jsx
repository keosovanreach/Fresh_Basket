import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-900 py-10 ">
      <div className="max-w-7xl px-8 mx-auto  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl sm:text-3xl text-white">
              About us
            </h1>
            <hr className=" w-20 border-2 mt-3 rounded-2xl text-orange-400" />
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 ">
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl sm:text-3xl text-white">
              Get in Touch
            </h1>
            <hr className=" w-20 border-2 mt-3 rounded-2xl text-orange-400" />
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-5 ">
              24/7, Koh Krobei, Prek Tmei, Chbar Ormpov, Phnom Penh.
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-5 ">
              support@fruitkha.com
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-5 ">
              +855 77 263 481
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl sm:text-3xl text-white">Pages</h1>
            <hr className=" w-20 border-2 mt-3 rounded-2xl text-orange-400" />
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
              - Home
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
              - About
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
              - Services
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
              - Blog
            </p>
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
              - Contact
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl sm:text-3xl text-white">
              Subscribe
            </h1>
            <hr className=" w-20 border-2 mt-3 rounded-2xl text-orange-400" />
            <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 ">
              Subscribe to our mailing list to get the latest updates.
            </p>
            <div className="flex items-center mt-10">
              <input
                type="email"
                placeholder="Email Address"
                className="px-2 py-4 rounded-l-lg bg-gray-800"
              />
              <div className="px-4 py-4 bg-gray-800 text-white rounded-r-lg font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer ml-2">
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center mt-10">
          <p className="font-serif text-lg sm:text-lg md:text-lg lg:text-lg text-gray-400 mt-3 hover:text-orange-400 cursor-pointer ">
            © 2022 Fruitkha. All rights reserved.
          </p>
          <hr className=" w-20 border-1  rounded-2xl text-orange-400" />
          <div className="grid grid-cols-4 gap-4 text-white ">
            <div className="flex items-center justify-center hover:text-orange-400 cursor-pointer transition duration-300">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="flex items-center justify-center hover:text-orange-400 cursor-pointer transition duration-300">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="flex items-center justify-center hover:text-orange-400 cursor-pointer transition duration-300">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="flex items-center justify-center hover:text-orange-400 cursor-pointer transition duration-300">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
