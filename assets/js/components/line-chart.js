const ctx = document.getElementById("lineChart");

const labels = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "My Second Dataset",
      data: [100, 20, 42, 23, 40, 60, 10],
      fill: false,
      borderColor: "rgb(66, 135, 245)",
      tension: 0.1,
    },
  ],
};

export const line = () =>
  new Chart(ctx, {
    type: "line",
    data: data,
  });
