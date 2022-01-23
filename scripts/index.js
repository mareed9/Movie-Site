const moviesBox = document.getElementById("movies");

const addMovie = (movieData) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const btn = document.createElement("button");
  const a = document.createElement("a");
  div.appendChild(p);
  div.appendChild(img);
  div.appendChild(p1);
  btn.appendChild(a);
  div.appendChild(btn);

  div.setAttribute("class", "pl-4 col-11 col-md-10 col-lg-4");
  p.setAttribute("class", "title center mb-2");
  p.setAttribute("id", "name");
  img.setAttribute("class", "pic mb-3 ml-2 col-12 col-md-12");
  img.setAttribute("id", "imag");
  p1.setAttribute("class", "ml-4");
  p1.setAttribute("id", "summary");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "button");
  a.setAttribute("href", movieData.url);
  a.setAttribute("target", "_blank");
  // IF WE WANT TO USE IMDB link from API
  // a.setAttribute(
  //   "href",
  //   `https://www.imdb.com/title/${movieData.externals.imdb}/`
  // );

  moviesBox.appendChild(div);

  p.innerHTML = movieData.name;
  img.src = movieData.image.medium;
  p1.innerHTML = movieData.summary;
  a.innerHTML = "Watch movie here!";
  //a.innerHTML = "See more on IMDB!"
};

// Chart settings start

const names = [];
const rating = [];
const barColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];
const borderColor = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];
const borderWidth = 1;

// Chart settings end

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();

  addMovie(data);
  names.push(data.name);
  rating.push(data.rating.average);
}

getapi("https://api.tvmaze.com/shows/1");
getapi("https://api.tvmaze.com/shows/2");
getapi("https://api.tvmaze.com/shows/3");

// Chart does not have all values so i used setTimeout to push it to Callback queue and wait for everything to be ready so it has all values it needs
// not the best solution but one i could think of at deadline
setTimeout(function () {
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: names,
      datasets: [
        {
          backgroundColor: barColors,
          data: rating,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 10,
            },
          },
        ],
      },
    },
  });
}, 100);