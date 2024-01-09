"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCard from "../components/SmallCard";

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
    <div className="max-w-[100px] ">
      <div className="w-[375px] h-[229px] bg-blue-100 items-center   justify-center relative">
        <div className="text-slate-700 text-lg font-semibold flex ">
          Quick Transfer
        </div>
        <div className="w-[325px] h-[195px] mx-auto flex flex-col bg-white rounded-[15px]">
          <div className="w-[289px] mx-auto h-[93px]">
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
        </div>
      </div>
    </div>
  );
};

export default Responsive;
