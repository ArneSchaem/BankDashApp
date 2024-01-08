import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchInput: React.FC = () => {
  return (
    <div className="relative w-[325px]  h-[2.5rem]">
      <div className="flex items-center px-3  bg-[#F5F7FA] rounded-[2.5rem]">
        <HiMagnifyingGlass
          className="mr-[0.62rem] ml-[0.75rem] "
          size={16}
          color="#718EBF"
        />
        <input
          type="text"
          placeholder="Search for something"
          className="w-full h-[2.5rem] outline-none bg-transparent text-[0.81rem] text-[#8BA3CB]"
        />
      </div>
    </div>
  );
};

export default SearchInput;
