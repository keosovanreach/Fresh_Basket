import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Strawberry",
      per: "Per Kg",
      price: "2.99$",
      image:
        "https://i.pinimg.com/1200x/95/7c/ae/957caea3832359c85a87825eadf450e8.jpg",
    },
    {
      id: 2,
      name: "Orange",
      per: "Per Kg",
      price: "2.99$",
      image:
        "https://i.pinimg.com/1200x/b5/cd/48/b5cd486fe8a4df7f71ce241bf8dfc25a.jpg",
    },
    {
      id: 3,
      name: "Banana",
      per: "Per Kg",
      price: "2.99$",
      image:
        "https://i.pinimg.com/736x/44/2e/88/442e88c381f9cf4f6562c480778c9b52.jpg",
    },
  ];
  return (
    <div className="bg-white w-full py-10 mt-10">
      <div className=" text-center mb-8 px-2 sm:px-4 md:px-12 w-full mx-auto ">
        <h1 className="text-4xl font-extrabold md:text-4xl xl:text-5xl ">
          <span className="text-orange-400">Our</span> Products
        </h1>
        <p className="font-semibold  sm:text md:text text-lg mt-4 text-gray-600 xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12 mt-15 py-10">
        {products.map((products) => (
          <div
            key={products.id}
            className="relative rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.25)] overflow-hidden h-[500px] bg-white hover:shadow-none cursor-pointer transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={products.image}
                alt="Product"
                className="w-full h-[250px] object-cover "
              />
            </div>
            <div className="pt-4 flex flex-col gap-3 justify-center items-center">
              <h2 className="text-2xl font-bold mb-2">{products.name}</h2>
              <p className="text-gray-600">{products.per}</p>
              <h1 className="text-bold text-4xl font-semibold text-black">
                {products.price}
              </h1>
            </div>
            <div className="flex justify-center items-center pt-10">
              <button
              onClick={() => {
                window.dispatchEvent(new Event("cartUpdated"));
              }}
                className="px-4 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer flex items-center gap-2
            "
              >
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
