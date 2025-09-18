import React from "react";

const ProjectPage = () => {
  return (
    <div className="w-full h-auto mt-16 bg-[#1c1c1c] rounded-t-4xl text-gray-50 px-7 py-4">
      <div className="text-[82px] font-semibold mt-10">PROJECTS</div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2 my-10"> */}
        {/* {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="group flex items-center cursor-pointer justify-center bg-gray-50 h-40 hover:h-72 hover:rounded-3xl transition-all duration-400 text-black relative"
            >
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex justify-center items-center font-semibold h-12 border-t-2 border-b-2 border-gray-600 w-full bg-white/90 backdrop-blur-sm">
                VIEW PROJECT
              </div>
            </div>
          ))} */}
          <div className="relative group bg-gray-50 h-40 mt-3 text-black">
            <div className="absolute ">
              First Image
            </div>
          </div>
          <div className="bg-gray-50 h-40 mt-3 text-black">
            a
          </div>
          <div className="bg-gray-50 h-40 mt-3 text-black">
            a
          </div>
          <div className="bg-gray-50 h-40 mt-3 text-black">
            a
          </div>
          <div className="bg-gray-50 h-40 mt-3 text-black">
            a
          </div>
      {/* </div> */}
    </div>
  );
};


export default ProjectPage;
