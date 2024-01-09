"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

interface CustomKeenSliderOptions {
  spacing?: number;
}

const images = ["/images/Card1.png", "/images/Card2.png"];

const SwipeComponent: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement, CustomKeenSliderOptions>({
    spacing: 10,
    mode: "free-snap",
  });

  return (
    <div style={{ maxWidth: "350px", overflow: "hidden" }}>
      <div ref={sliderRef} className="keen-slider" style={{ display: "flex" }}>
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{ flex: "0 0 auto", paddingRight: "30px" }}
          >
            <Image
              src={src}
              alt={`image-${index}`}
              width={265}
              height={170}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeComponent;
