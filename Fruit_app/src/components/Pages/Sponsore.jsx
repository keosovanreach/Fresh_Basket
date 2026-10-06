import React from "react";
function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      image:
        "https://i.pinimg.com/736x/bf/38/03/bf38038cfc33144113a051f3e4f1be4a.jpg",
    },
    {
      id: 2,
      name: "Sponsor 2",
      image:
        "https://i.pinimg.com/736x/ab/5b/e1/ab5be12fc44b1e2969d2ba7774975ecd.jpg",
    },
    {
      id: 3,
      name: "Sponsor 3",
      image:
        "https://i.pinimg.com/1200x/12/9b/37/129b3783fa10cbbb9f50c2ba79ee72fc.jpg",
    },
    {
      id: 4,
      name: "Sponsor 4",
      image:
        "https://i.pinimg.com/1200x/ba/3a/34/ba3a34ee737967a6fc74bf886c231b40.jpg",
    },
  ];
  return (
    <div className="bg-gray-100 w-full py-8 sm:py-10 mt-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
      
        {/* Horizontal scroll on mobile */}{" "}
        <div className="overflow-x-auto">
       
          <div className="grid grid-cols-4 gap-4 min-w-[600px]">
            
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
              >
                
                <img
                  className="w-full h-24 sm:h-32 md:h-40 object-contain rounded"
                  src={sponsor.image}
                  alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;