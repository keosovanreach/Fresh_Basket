import React from "react";

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Keo Sovanreah",
      position: "CSE Student",
      image: "src/assets/images/photo_2026-11-05_13-14-39.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 w-full py-16 mt-10">
      <div className="text-center mb-12 px-4 sm:px-6 md:px-12">
        <span className="text-orange-400 font-bold uppercase tracking-[4px] text-sm">
          Meet The Creator
        </span>

        <h1 className="text-4xl font-extrabold md:text-5xl mt-3 text-gray-900">
          Project <span className="text-orange-400">Owner</span>
        </h1>

        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg mt-5 text-gray-500 leading-relaxed">
          This is a project that is being developed by a team of dedicated
          professionals who are passionate about creating innovative solutions.
        </p>

        <div className="w-20 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 px-4 sm:px-6 md:px-12 mt-10 py-5 justify-items-center">
        {teamMembers.map((member) => (
          <div
            className="group relative rounded-2xl overflow-hidden w-full max-w-[350px] h-[450px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            key={member.id}
          >
            <div className="relative overflow-hidden w-full h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full text-white p-4 items-center justify-center flex gap-10">
                <i className="fa-brands fa-facebook text-2xl hover:text-orange-400 cursor-pointer"></i>

                <i className="fa-brands fa-twitter text-2xl hover:text-orange-400 cursor-pointer"></i>

                <i className="fa-brands fa-instagram text-2xl hover:text-orange-400 cursor-pointer"></i>
              </div>

              <div className="absolute bottom-24 left-0 w-full text-white px-5 text-center z-10">
                <div className="w-12 h-1 bg-orange-400 mx-auto mb-4 rounded-full"></div>

                <h1 className="text-2xl font-extrabold tracking-wide">
                  {member.name}
                </h1>

                <p className="text-orange-300 text-base font-medium mt-2 tracking-wider">
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
