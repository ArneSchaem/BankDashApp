import React from "react";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";
import { PiPaypalLogo } from "react-icons/pi";

import { BsCoin } from "react-icons/bs";

const RecentTransaction = () => {
  return (
    <div className="w-[375px] lg:w-[231px] mx-auto lg:flex lg:h-[208] lg:mx-0 flex-col lg:ml-[25px]  lg:bg-transparent  bg-white p-[1.56rem] lg:p-0  ">
        <div className="text-slate-700 text-base font-semibold lg:text-[1.13rem] ">

          Recent Transaction
        </div>
      <div className="w-[20.3rem] lg:w-[14.4rem] lg:mt-auto lg:h-[10.6rem] h-[15.3rem]  bg-white  rounded-[15px] p[15px]">
    
        <div className="w-[18rem] lg:w-[12.5rem]  lg:h-[8.75rem] flex flex-col gap-[12px] h-[10.8rem] mx-[1.13rem] my-[1.25rem] lg:my-[0.92rem]  lg:mx-[0.92rem]">
          <div className="w-[289px] lg:w-[200px] h-[50px]relative flex flex-row items-center ">
            <div className="w-[50px] lg:w-[40px] lg:h-[40px]  h-[50px] bg-orange-100 flex-shrink-0 rounded-full items-center flex justify-center mr-[15px] lg:mr-[8px]">
              <IoCardOutline color="#FFBB38" size={20} />
            </div>

            <div className="flex w-[224px] relative justify-between ">
              <div className="w-[111px] lg:w-[103px] h-9 relative flex flex-col">
                <div
                  className="text-neutral-800  text-sm lg:text-[13px] font-medium"
                >
                  Deposit from my
                </div>
                <div className="text-slate-400 text-xs  font-normal">
                  28 January 2021
                </div>
              </div>
              <div className="flex text-red-500 relative text-[11px] font-medium items-center">
                -$850
              </div>
            </div>
          </div>
          <div className="w-[289px] h-[50px] lg:w-[200px] relative flex flex-row items-center ">
            <div className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] bg-[#E7EDFF] flex-shrink-0 items-center flex justify-center rounded-full mr-[15px] lg:mr-[8px]">
              <PiPaypalLogo color="#396AFF" size={20} />
            </div>
            <div className="flex  w-[224px] relative justify-between ">
              <div className="w-[100px] h-9 relative flex flex-col">
                <div className="flex text-neutral-800 text-sm lg:text-[13px] font-medium ">
                  Deposit Paypal
                </div>
                <div className="flex text-slate-400 text-xs font-normal ">
                  25 January 2021
                </div>
              </div>
              <div className="flex text-emerald-400 text-[11px] font-medium items-center ">
                +$2,500
              </div>
            </div>
          </div>
          <div className="w-[289px] h-[50px] lg:w-[200px] relative flex flex-row items-center ">
            <div className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] bg-[#DCFAF8] flex-shrink-0 rounded-full flex items-center justify-center mr-[15px] lg:mr-[8px]">
              <BsCoin color="#16DBCC" size={20} />
            </div>
            <div className="flex  w-[224px] relative justify-between ">
              <div className="w-[93px] h-9 relative flex ">
                <div className="left-0 top-0 absolute text-neutral-800 lg:text-[13px] text-sm font-medium ">
                  Jemi Wilson
                </div>
                <div className="left-0 top-[21px] absolute text-slate-400 text-xs font-normal ">
                  21 January 2021
                </div>
              </div>
              <div className="flex  text-emerald-400 text-[11px] font-medium items-center ">
                +$5,400
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
