import React from "react";

function OurTeam() {
    const teamMembers = [
      {
        id: 1,
        name: "John Doe",
        position: "CEO",
        image:
          "https://themewagon.github.io/fruitkha/assets/img/team/team-1.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Marketing Manager",
        image:
          "https://themewagon.github.io/fruitkha/assets/img/team/team-2.jpg",
      },
      {
        id: 3,
        name: "Mike Johnson",
        position: "Sales Manager",
        image:
          "https://themewagon.github.io/fruitkha/assets/img/team/team-3.jpg",
      }
  
      ]
        
  return (
    <div className="bg-white w-full py-10 mt-10">
      <div className="text-center mb-8 px-4 sm:px-6 md:px-12 w-full mx-auto">
        {" "}
        <h1 className="text-4xl font-extrabold md:text-4xl xl:text-5xl">
          {" "}
          <span className="text-orange-400">Our</span> Teams{" "}
        </h1>{" "}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-lg mt-4 text-gray-600 xl:text-xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.{" "}
        </p>{" "}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12 mt-15 py-10">
        {teamMembers.map((member) => (
          <div
            className="relative rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.25)] overflow-hidden h-[400px] bg-white "
            key={member.id}
          >
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover "
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full text-white p-4 items-center justify-center flex gap-10">
              <i class="fa-brands fa-facebook text-2xl hover:text-orange-400 cursor-pointer"></i>
              <i class="fa-brands fa-twitter text-2xl hover:text-orange-400 cursor-pointer"></i>
              <i class="fa-brands fa-instagram text-2xl hover:text-orange-400 cursor-pointer"></i>
            </div>
            <div className="absolute bottom-10 left-0 w-full text-white p-4 items-center justify-center flex flex-col">
              <h1 className="text-2xl font-bold">{member.name}</h1>
              <p className="text-lg">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
