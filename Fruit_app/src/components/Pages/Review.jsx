import React from "react";
import profile from "../../assets/images/profile.png";

function Review() {
  return (
    <div className="bg-white w-full py-10 mt-10">
      <div className="max-w-3xl mx-auto px-6 flex justify-center">
        <div className="flex flex-col items-center text-center mb-20">
          <img
            className="w-[100px] h-[100px] border-4 border-amber-400 rounded-full object-cover"
            src={profile}
            alt="Keo Sovanreach"
          />
          <div className="flex flex-col items-center pt-5">
            <h1 className="font-bold text-2xl">Keo Sovanreach</h1>

            <p className="text-sm font-serif pt-3 text-gray-500">
              Local Shop Owner
            </p>
            <p className="max-w-2xl font-serif text-base sm:text-lg text-gray-700 leading-8 pt-6">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo."
            </p>
          </div>
          <button className="px-10 py-2 mt-5 bg-orange-400 text-white rounded-full font-semibold hover:bg-gray-900 hover:text-amber-400 transition duration-300 cursor-pointer">
           About Me
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Review;
