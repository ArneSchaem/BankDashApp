"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartPage: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const DISPLAY = true;
  const CHART_AREA = true;
  const TICKS = true;
  Chart.defaults.color = "#718EBF";

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: "bar",

          data: {
            labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],

            datasets: [
              {
                label: "Withdraw",
                data: [480, 350, 330, 480, 150, 410, 400],
                backgroundColor: "#1814F3",
                borderRadius: 30,
                barPercentage: 0.5,
                barThickness: 17,
                maxBarThickness: 7,
                minBarLength: 2,
              },
              {
                label: "Diposit",
                data: [300, 120, 230, 380, 230, 250, 330],
                backgroundColor: "#16DBCC",
                borderRadius: 30,
                barPercentage: 1.5,
                barThickness: 17,
                maxBarThickness: 7,
                minBarLength: 2,
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
                  display: false,
                },
                border: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: DISPLAY,
                  drawOnChartArea: CHART_AREA,
                  drawTicks: TICKS,
                },
                border: {
                  display: false,
                },
                min: 0,
                max: 500,
                ticks: {
                  stepSize: 100,
                },
              },
            },
            indexAxis: "x",
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[375px] lg:w-[487px] lg:h-[299px] mx-auto h-auto lg:mx-0  lg:mt-[20px] bg-white lg:bg-transparent p-[1.56rem] lg:p-0 ">
      <div className="text-[#343C6A] text-base font-semibold ">
        Weekly Activity
      </div>
      <div className=" lg:block lg:w-[487px] lg:h-[261px] lg:bg-white lg:rounded-[20px]">
        <div className="flex flex-row gap-[28px] justify-end mt-[17px] mb-[-13px] mr-[18px]">
          <div className="w-auto h-auto flex lg:absolute mt-3 gap-[28px] lg:mr-2 ">
            <div className="w-[62px] flex h-[15px] items-center  ">
              <div className="w-3 h-3   bg-teal-400 rounded-full mr-[10px]" />
              <div className="  text-slate-400 text-xs font-normal ">
                Diposit
              </div>
            </div>
            <div className="w-[77px] flex h-[15px] items-center  ">
              <div className="w-3 h-3  mr-[10px]  bg-[#1814F3] rounded-full" />
              <div className="  text-slate-400 text-xs font-normal ">
                Withdraw
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[289px] lg:w-[442px] h-[204px] lg:h-[204px] lg:mt-[40px]  mx-auto mt-[12px]">
          <canvas id="myChart" ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
