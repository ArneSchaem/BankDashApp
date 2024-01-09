import React from "react";
import ImageSwiper from "./ImageSwiper";

const Cards = () => {
  return (
    <div className="w-[375px] lg:flex lg:flex-col  lg:w-[487px] lg:h-[170px] mx-auto lg:mx-0 h-auto  bg-white p-[1.56rem] lg:p-0 ">
      <div className="flex justify-between w-[325px] h-[19px] relative">
        <div className="text-[#343C6A] text-base font-semibold">My Cards</div>
        <div className="text-[#343C6A] text-sm font-semibold">See All</div>
      </div>

      <div className="mt-[12px] lg:mt-0">
        <ImageSwiper />
      </div>
    </div>
  );
};

export default Cards;
