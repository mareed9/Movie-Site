var names = ["Under the Dome", "Person of Interest", "Bitten"];
var rating = [6.5, 8.9, 7.6, ""];
var barColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)'
];
var borderColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
];
var borderWidth = 1;

new Chart("myChart", {
  type: "bar",
  data: {
    labels: names,
    datasets: [{
      backgroundColor: barColors,
      data: rating,
      borderColor: borderColor,
      borderWidth: borderWidth,
    }, ],
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
    },
  },
});