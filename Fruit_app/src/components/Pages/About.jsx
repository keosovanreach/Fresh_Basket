import React from "react";

function About() {
  return (
    <div className="bg-white w-full py-10 mt-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-10 py-10 ">
        <div className="relative w-fit sm:w-fit md:w-fit lg:w-fit xl:w-fit">
          <img
            className="w-[500px] h-[500px] object-cover rounded-2xl"
            src="https://i.pinimg.com/736x/13/4d/7f/134d7fb5a1c8a9a91d30f42e02671b12.jpg"
            alt="About"
          />
          <a href="https://youtu.be/0jSgcE-sxeo?si=X2trY_YYZJfORKcM">
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-20 h-20 rounded-full bg-orange-400
                       flex items-center justify-center
                       text-white shadow-lg
                       hover:bg-orange-500 hover:scale-110
                       transition duration-300 cursor-pointer "
            >
              <i className="fas fa-play text-2xl ml-1"></i>
            </button>
          </a>
          {/* absolute is fix the iteam in the center */}
        </div>
        <div className="flex flex-col justify-center ">
          <p className="font-serif text-xl sm:text-xl md:text-xl xl:text-xl lg:text-xl text-black pt-5 text-start">
            Since Year 1999
          </p>

          <h1 className="font-extrabold text-5xl sm:text-5xl md:text-5xl xl:text-5xl lg:text-5xl text-black  ">
            We are <span className="text-orange-400">Fruitkha</span>
          </h1>
          <div className="flex flex-col ">
            <p className="font-serif text-lg sm:text-lg md:text-lg xl:text-lg lg:text-lg text-black pt-5">
              Etiam vulputate ut augue vel sodales. In sollicitudin neque et
              massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget
              dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed,
              
              interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sapiente facilis illo repellat
              veritatis minus, et labore minima mollitia qui ducimus .
            </p>
          </div>
          <div className="flex justify-start items-center pt-10">
            <button
              className="px-4 py-2 bg-orange-400 text-white rounded-2xl font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer flex items-center 
            "
            >
              
             Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
