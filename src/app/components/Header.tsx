import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";

const Header = () => {
  return (
    <div>
      <div className=" lg:ml-[230px] max-w-full flex realtaive flex-col justify-between lg:flex-row lg:h-[85px] h-[140px] bg-white p-[1.56rem] ">
        <div className="max-w-[20.25rem]  max-h-[2.1875rem] flex-shrink-0  items-center  gap-[5.56rem] flex flex-row">
          <div className="lg:hidden">
            <FaBars size={25} />
          </div>

          <div className="text-center text-[#343C6A] text-[1.25rem] font-semibold ">
            Overview
          </div>
          <div className="lg:ml-auto w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] flex lg:hidden rounded-full justify-center items-center">
            <Image
              src="/images/profil-image.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full "
            />
          </div>
        </div>

        <div className=" w-[325px] flex lg:hidden  h-10 mt-[1.56rem] lg:mt-0 relative">
          <SearchInput />
        </div>

        <div className="lg:flex flex-row gap-[20px] hidden ">
          <div className=" w-[325px] flex   h-10 mt-[1.56rem] lg:mt-0 relative">
            <SearchInput />
          </div>
          <div className="w-10 h-10  lg:flex hidden bg-slate-100 rounded-full  justify-center items-center">
            <IoSettingsOutline size={18} color="#718EBF" />
          </div>

          <div className="w-10 h-10  lg:flex hidden bg-slate-100 rounded-full  justify-center items-center">
            <LuBellDot size={18} color="#FE5C73" />
          </div>
          <div className="lg:ml-auto w-[35px] h-[35px] lg:flex hidden  rounded-full justify-center items-center">
            <Image
              src="/images/profil-image.png"
              alt="logo"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
