import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div>
      <div className=" lg:ml-[230px] max-w-full flex realtaive flex-col lg:flex-row lg:h-[85px] h-[140px] bg-white p-[1.56rem] ">
        <div className="max-w-[20.25rem]  max-h-[2.1875rem] flex-shrink-0  items-center  gap-[5.56rem] flex flex-row">
          <div className="lg:hidden">
            <FaBars size={25} />
          </div>

          <div className="text-center text-[#343C6A] text-[1.25rem] font-semibold ">
            Overview
          </div>
          <div className="lg:justify-end">
            <Image
              src="/images/profil-image.png"
              alt="logo"
              width={35}
              height={35}
              className=""
            ></Image>
          </div>
        </div>

        <div className=" w-[325px] h-10 mt-[1.56rem] relative">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
