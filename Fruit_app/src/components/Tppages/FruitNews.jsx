import React from "react";

function FruitNews() {
  const data = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Home Delivery",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Best Price ",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    },
    {
      icon: "fa-solid fa-rotate-left",
      title: "Custom Box",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    {
      icon: "fa-solid fa-rotate-left",
      title: "Quick Refund",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
  ];
  return (
    <div className="bg-white w-full py-10  ">
      <div className="max-w-7xl mx-auto ">
        <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-10 py-5 items-center justify-center ">
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-[1.5em] sm:text-[2em] md:text-[2.5em] lg:text-[3em] xl:text-[3em] font-bold text-gray-900">
              Why <span className="text-orange-400">Fruitkha</span>
            </h1>

            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-center ">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 justify-center  "
                >
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center shrink-0 ">
                    <i className={`fa-regular ${item.icon} text-lg`}></i>
                  </div>
                  <div className="flex flex-col items-start">
                    <h1 className="font-bold text-sm md:text-lg">
                      {item.title}
                    </h1>
                    <p className="text-xs md:text-sm text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 md:mt-0 lg:mt-0 xl:mt-0 ml-0 md:ml-10 lg:ml-10 xl:ml-10 w-full h-full ">
            <img
              src="https://i.pinimg.com/1200x/e9/80/15/e98015b5884de869240b211cc9cd44f5.jpg"
              alt="Fruitkha"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitNews;
