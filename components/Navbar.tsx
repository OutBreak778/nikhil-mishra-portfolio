import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-3">
      <div className="flex justify-center items-center gap-2">
        <div className="flex">
        <p className="flex items-center justify-center border-[#0F172A] rounded-full w-8 h-8 border-[2px]"></p>
        </div>
        <p className={`font-medium text-[30px]`}>OUTBREAK</p>
      </div>
      <div className="w-14 h-9 border rounded-full border-[#64748B] gap-0.5 flex items-end px-2 justify-center flex-col">
        <p className="w-8 h-[1px] rounded-xl bg-[#64748B]"></p>
        <p className="w-5 h-[1px] rounded-xl bg-[#64748B]"></p>
        <p className="w-6 h-[1px] rounded-xl bg-[#64748B]"></p>
      </div>
    </div>
  );
};

export default Navbar;
