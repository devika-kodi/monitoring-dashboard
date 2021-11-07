import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Rolled (meters)",
      data: [49, 45, 35, 60],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Target (meters)",
      data: [60, 60, 60, 60],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  scales: {
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
    x: {
      stacked: true,
    },
  },
};

const BarChart = () => (
  <div>
    <h1>Production Rate</h1>
    <Bar data={data} options={options} />
  </div>
);

export default BarChart;
