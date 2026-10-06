import React from "react";

function Feature() {
  const data = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Free Shipping",
      text: "When order over $75",
    },
    {
      icon: "fa-solid fa-phone",
      title: "24/7 Support ",
      text: "Get support all day",
    },
    {
      icon: "fa-solid fa-rotate-left",
      title: "Refund",
      text: "Get refund within 3 days!",
    },
  ];

  return (
    <div className="w-full bg-gray-200 py-4 md:py-10 ">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-start  ">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-3 justify-center ">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center shrink-0 ">
              <i className={`fa-regular ${item.icon} text-lg`}></i>
            </div>

            <div className="flex flex-col items-start">
              <h1 className="font-bold text-sm md:text-lg">{item.title}</h1>

              <p className="text-xs md:text-sm text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
