import React from 'react'

function Meat() {
    const Meats = [
      {
        id: 1,
        name: "Beef",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/736x/ba/72/cc/ba72cc5f2f294de96f8d08c90b052ab7.jpg",
      },
      {
        id: 2,
        name: "Chicken",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/1d/52/01/1d520111150a51e99e66a3b82fa65fd5.jpg",
      },
      {
        id: 3,
        name: "Salmon",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/ec/4b/d5/ec4bd5ab51d97ceaea8dbb7eb287f678.jpg",
      },
      {
        id: 4,
        name: "Pork",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/23/5d/a4/235da4893a6a6b57a091cda21f810709.jpg",
      },
      {
        id: 5,
        name: "Chicken Gizzards",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/736x/c6/5e/57/c65e57a80dca4aa45b8f1c5691f033ef.jpg",
      },
      {
        id: 6,
        name: "Eggs",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/e6/0e/ce/e60ece84210237ccf6efd4b06681a33c.jpg",
      },
    ];
    return (
      <div className="bg-white w-full py-10 mt-2">
        <div className=" text-center mb-8 px-2 sm:px-4 md:px-10 w-full mx-auto ">
          <h1 className="text-4xl font-extrabold md:text-4xl xl:text-5xl ">
            <span className="text-orange-400">Meat</span> Products
          </h1>
          <p className="font-semibold  sm:text md:text text-lg mt-4 text-gray-600 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12 mt-5 py-10">
          {Meats.map((product) => (
            <div
              key={product.id}
              className="relative rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.25)] overflow-hidden h-[500px] bg-white hover:shadow-none cursor-pointer transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-full h-[250px] object-cover "
                />
              </div>
              <div className="pt-4 flex flex-col gap-3 justify-center items-center">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.per}</p>
                <h1 className="text-bold text-4xl font-semibold text-black">
                  {product.price}
                </h1>
              </div>
              <div className="flex justify-center items-center pt-10">
                <button
                  onClick={() => {
                    window.dispatchEvent(new Event("cartUpdated"));
                  }}
                  className="px-4 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-orange-400 transition duration-300 cursor-pointer flex items-center gap-2"
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

export default Meat
