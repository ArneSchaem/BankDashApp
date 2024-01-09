import React from "react";
import Image from "next/image";



const SmallCard = () => {
  return (
    <div className="w-[60px] h-[93px] bg-white">
      <div className="flex flex-col gap-[12px]">
      <div className="w-[50px] h-[50px] mx-auto  flex relative">
      <div className="w-[50px] h-[50px] bg-blue-300 rounded-full items-center flex justify-center" >     
L
</div>
</div>
        <div className="flex flex-col">
      <div className="text-neutral-800 text-xs font-normal ">Livia Bator</div>
      <div className="text-slate-400 text-xs text-center font-normal ">CEO</div>
      </div>
      </div>
    </div>
  );
};

export default SmallCard;
