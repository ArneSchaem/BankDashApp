import React from "react";
import Image from "next/image";

const CreditCards = () => {
  return (
    <div className="w-[30.43rem] flex h-[13rem] flex-col relative ">
      <div className="w-[30.43rem] h-[10.62rem] justify-between inline-flex">
        <div className="text-[#343C6A] text-[1.125rem] font-semibold ">
          My Cards
        </div>
        <div className="text-right text-[#343C6A] text-[0.9375rem]  font-semibold ">
          See All
        </div>
      </div>
      <div className="flex gap-[1.56rem]   w-[14.4375rem] flex-shrink-0  h-[10.625rem]">
        <Image
          src="/images/Card4.png"
          alt="logo"
          width={696}
          height={512}
        ></Image>
        <Image
          src="/images/Card3.png"
          alt="logo"
          width={696}
          height={512}
        ></Image>
      </div>
    </div>
  );
};

export default CreditCards;
