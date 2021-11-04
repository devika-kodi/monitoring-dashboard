import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Work Completed", "Work Left"],
  datasets: [
    {
      label: "Today's work Completed",
      data: [75, 25],
      backgroundColor: ["rgba(100, 50, 200, 1)", "rgba(191, 191, 191, 1)"],
      borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const DonutChart = () => (
  <div>
    <h2>Today&#39;s Work Completed</h2>
    <Doughnut data={data} />
  </div>
);

export default DonutChart;
