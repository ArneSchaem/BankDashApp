"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCard from "../components/SmallCard";
import { FiSend } from "react-icons/fi";

const Responsive: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[375px] h-[229px] lg:mt-[20px]  bg-white lg:w-[295px] lg:h-[290px] lg:mr-[25px]  lg:bg-transparent  flex flex-col">
      <div className="text-slate-700 text-lg font-semibold flex ">
        Quick Transfer
      </div>
      <div className="w-[325px] h-[195px] lg:w-[295px] lg:mt-[16px] lg:h-[220px] lg:mx-0 mx-auto flex flex-col bg-white rounded-[15px]">
        <div className="w-[189px] mx-auto h-[93px]">
          <Slider {...settings}>
            {[
              <SmallCard />,
              <SmallCard />,
              <SmallCard />,
              <SmallCard />,
              <SmallCard />,
              <SmallCard />,
            ].map((item) => (
              <div className="outline-none">
                <h3 className="text-4xl font-bold">{item}</h3>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[289px] h-10  relative flex flex-row items-center gap-[25px] lg:gap-[20px] lg:ml-[15px] mx-auto">
          <div className="text-[#718EBF] text-xs flex font-normal"> 
            Write Amount
          </div>
          <div className="w-[187px] lg:w-[168px]   h-10 bg-slate-100 flex rounded-[50px] items-center justify-between">
            <div className="text-slate-400 text-xs font-normal ml-[15px] lg:ml-[0px]">
              <input
                type="text"
                contentEditable
                className="outline-none border-none w-[40px] h-[15px] text-slate-400 text-xs font-normal ml-[15px] bg-transparent"
              />
            </div>
            <button className="w-[100px] h-10 flex justify-center items-center bg-blue-700 rounded-[50px] shadow">
              <div className="w-[57.11px] h-4 flex items-center gap-[9px]">
                <div className="flex text-white text-[13px] font-medium">
                  Send
                </div>
                <div className="flex">
                  <FiSend color="#FFF" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;

/*import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SwipeToSlide: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4">Swipe To Slide</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="outline-none">
            <h3 className="text-4xl font-bold">{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
 */
