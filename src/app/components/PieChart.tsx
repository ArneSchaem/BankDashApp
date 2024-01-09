"use client";

import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";

const IndexPage: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvas.current;

    if (ctx) {
      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
          datasets: [{ data: [30, 15, 35, 20] }],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              
              display: false,
            },
            title: {
              display: false,
              text: "Number of animals in the zoo",
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="w-[375px] lg:ml-[1.56rem] h-[271px] lg:w-[231px] lg:h-auto lg:mt-[20px] flex flex-col lg:gap-[16px]  relative bg-white  lg:bg-transparent ">
      <div className="text-slate-700 text-base font-semibold">
      Expense Statistics
    </div>

    <div className="w-[325px] items-center lg:w-[231px] lg:h-[261px] flex h-60 bg-white relative justify-center mx-auto rounded-[15px] ">
      <div className="w-[202px] mx-auto justify-center flex items-center lg:my-auto h-[195px]">
     

        <canvas ref={canvas}  width="202px"  height="195px"></canvas>

      </div>
    </div>


        
      </div>
   


  );
};

export default IndexPage;
