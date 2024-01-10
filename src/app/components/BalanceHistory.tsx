"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Home: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    var gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, "rgba(45, 96, 255, 0.5)");
    gradient.addColorStop(1, "rgba(255,255,255,255)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        datasets: [
          {
            label: "false",
            data: [100, 410, 250, 790, 200, 600, 400],
            borderColor: "rgba(24, 20, 243, 1)",
            borderWidth: 2,
            fill: true,
            backgroundColor: gradient,
            borderCapStyle: "round",
            tension: 0.4,
            pointStyle: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          x: {
            grid: {
              display: true,
            },
            border: {
              display: false,
              dash: [2, 4],
            },
          },
          y: {
            border: {
              display: false,
              dash: [2, 4],
            },
            min: 0,
            max: 800,
            ticks: {
              stepSize: 200,
            },
          },
        },
        indexAxis: "x",
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-[375px] h-[254px] lg:w-[423px] lg:h-[220px] lg:mt-[20px]   lg:bg-transparent  relative bg-white  flex flex-col ">
        
        <div className="text-slate-700 text-lg font-semibold flex ">
        Balance History
      </div>

      <div className="w-[325px] lg:mt-[16px] h-[223px] lg:w-[423px] lg:h-[220px] bg-white rounded-[15px]">
        <div className="w-[383px]  h-[220px] flex mt-[15px] mx-auto " >
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
