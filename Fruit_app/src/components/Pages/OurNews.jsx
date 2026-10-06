import React from "react";

function OurNews() {
    const news = [
      {
        id: 1,
        image:
          "https://i.pinimg.com/736x/13/4d/7f/134d7fb5a1c8a9a91d30f42e02671b12.jpg",
        title: "You will vainly look for fruit on it in autumn.",
        author: "Admin",
        date: "25 December, 2019",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.",
      },
      {
        id: 2,
        image:
          "https://i.pinimg.com/1200x/45/9a/87/459a876ffd857b3f7aacbfe122716773.jpg",
        title: "You will vainly look for fruit on it in autumn.",
        author: "Admin",
        date: "25 December, 2019",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.",
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/736x/22/0c/7d/220c7d2c331a4bae1cf38f4b57f91556.jpg",
        title: "You will vainly look for fruit on it in autumn.",
        author: "Admin",
        date: "25 December, 2019",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.",
      },
    ];
  return (
    <div className="bg-white w-full py-10 mt-10">
      <div className=" text-center mb-8 px-2 sm:px-4 md:px-12 w-full mx-auto ">
        <h1 className="text-4xl font-extrabold md:text-4xl xl:text-5xl ">
          <span className="text-orange-400">Our</span> News
        </h1>
        <p className="font-sans sm:text md:text text-lg mt-4 text-gray-600 xl:text-xl grid items-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12 mt-15 py-10">
      {news.map((item) => (


          <div
            key={item.id}
            className="relative rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.25)] overflow-hidden h-[500px] bg-white hover:shadow-none cursor-pointer transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt="Fresh fruits"
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-4 grid grid-col gap-3 justify-start items-start px-4">
              <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-2xl xl:text-2xl">
                {item.title}
              </h2>
              <div className="flex items-center gap-5 sm:text-sm md:text-sm xl:text-sm  ">
                <p className="text-gray-600 gap-2 flex items-center">
                  <i className="fa-solid fa-user"></i>
                  {item.author}
                </p>
                <p className="text-gray-600 gap-2 flex items-center">
                  <i className="fa-solid fa-calendar"></i>
                  {item.date}
                </p>
              </div>

              <h1 className=" grid items-center font-serif text-gray-600 sm:text-lg md:text-lg xl:text-lg">
                {item.description}
              </h1>
              <div className="grid items-center ">
                <h1 className="font-bold text-black hover:text-orange-400 transition duration-300 cursor-pointer">
                  Read More
                  <i className="fas fa-angle-right ml-2 w-16 "></i>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default OurNews;
