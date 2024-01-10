"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniHome } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const SideBar = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  const linkStyles = (href: string) => {
    return isActiveLink(href) ? { color: "#2D60FF" } : { color: "#B1B1B1" };
  };

  return (
    <div className="lg:max-w-[1024px] relative h-0">
      <div className=" lg:w-[230px] lg:h-[943px]  lg:flex lg:flex-col hidden  bg-white">
        <div className="flex flex-row  p-[24px] gap-[9px]">
          <Image
            src="/images/LG.png"
            alt="logo"
            width={36}
            height={36}
            className=""
          ></Image>
          <div className="text-slate-700 text-[25px] font-black ">
            BankDash.
          </div>
        </div>

        <div className="flex mt-[1.7rem] flex-col w-[200px] ">
          <div className="flex flex-col gap-[30px]  ">
            <Link href="/">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/")}
              >
                {isActiveLink("/") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <HiMiniHome size={20} />
                <div className="text-base font-medium">Dashboard</div>
              </div>
            </Link>
            <Link href="/Transactions">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Transactions")}
              >
                {isActiveLink("/Transactions") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]   bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <FaMoneyBillTransfer size={20} />
                <div className="text-base font-medium">Transactions</div>
              </div>
            </Link>
            <Link href="/Accounts">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Accounts")}
              >
                {isActiveLink("/Accounts") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <FaUser size={20} />
                <div className="text-base font-medium">Accounts</div>
              </div>
            </Link>
            <Link href="/Investments">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Investments")}
              >
                {isActiveLink("/Investments") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <GrMoney size={20} />
                <div className="text-base font-medium">Investments</div>
              </div>
            </Link>
            <Link href="/CreditCards">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/CreditCards")}
              >
                {isActiveLink("/CreditCards") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <FaRegCreditCard size={20} />
                <div className="text-base font-medium">Credit Cards</div>
              </div>
            </Link>
            <Link href="/Loans">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Loans")}
              >
                {isActiveLink("/Loans") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <GiReceiveMoney size={20} />
                <div className="text-base font-medium">Loans</div>
              </div>
            </Link>
            <Link href="/Services">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Services")}
              >
                {isActiveLink("/Services") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <MdOutlineDesignServices size={20} />
                <div className="text-base font-medium">Services</div>
              </div>
            </Link>

            <Link href="/Setting">
              <div
                className="w-auto h-5 ml-[25px]  relative flex flex-row items-center gap-[20px]"
                style={linkStyles("/Setting")}
              >
                {isActiveLink("/Setting") && (
                  <div
                    className="w-[5px] h-[50px] ml-[-25px]  bg-blue-600 relative
              rounded-tr-[10px] rounded-br-[10px]"
                  />
                )}
                <IoIosSettings size={20} />
                <div className="text-base font-medium">Setting</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
