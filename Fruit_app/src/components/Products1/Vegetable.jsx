import React from 'react'

function Vegetable() {
    const Vegetables = [
      {
        id: 1,
        name: "Broccoli",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/85/be/6b/85be6b13b26671366e79637ba062756b.jpg",
      },
      {
        id: 2,
        name: "Carrot",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/12/46/a1/1246a103db19edbf91108dd698207dd0.jpg",
      },
      {
        id: 3,
        name: "Salad",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/736x/18/43/5d/18435d3fd61751828be24d187757b365.jpg",
      },
      {
        id: 4,
        name: "Cauliflower",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/736x/33/cd/a9/33cda90ab035e7b57401bc8e4ed0f5e1.jpg",
      },
      {
        id: 5,
        name: "Chili Peppers",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/6c/76/4f/6c764f40019043cfc2a6237977947504.jpg",
      },
      {
        id: 6,
        name: "Cucumber",
        per: "Per Kg",
        price: "2.99$",
        image:
          "https://i.pinimg.com/1200x/8a/6a/72/8a6a72cfebdcbc56a56d3cfced8528f0.jpg",
      },
    ];
    return (
      <div className="bg-white w-full py-10 mt-2">
        <div className=" text-center mb-8 px-2 sm:px-4 md:px-10 w-full mx-auto ">
          <h1 className="text-4xl font-extrabold md:text-4xl xl:text-5xl ">
            <span className="text-orange-400">Vegetable</span> Products
          </h1>
          <p className="font-semibold  sm:text md:text text-lg mt-4 text-gray-600 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12 mt-5 py-10">
          {Vegetables.map((product) => (
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

export default Vegetable
