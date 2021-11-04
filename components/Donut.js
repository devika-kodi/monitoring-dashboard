import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Work Completed", "Work Left"],
  datasets: [
    {
      label: "Today's work Completed",
      data: [75, 25],
      backgroundColor: ["rgb(54, 162, 235)", "rgba(200, 200, 200, 1)"],
      borderColor: ["rgb(54, 162, 235)", "rgba(200, 200, 200, 1)"],
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
