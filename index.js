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

  moviesBox.appendChild(div);

  p.innerHTML = movieData.name;
  img.src = movieData.image.medium;
  p1.innerHTML = movieData.summary;
  a.innerHTML = "Watch movie here!";
};

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  addMovie(data);
}

getapi("https://api.tvmaze.com/shows/1");
getapi("https://api.tvmaze.com/shows/2");
getapi("https://api.tvmaze.com/shows/3");




/*******LINK TO IMDb ********/

/*const moviesBox = document.getElementById("movies");

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
  a.setAttribute(
    "href",
    `https://www.imdb.com/title/${movieData.externals.imdb}/`
  );
  a.setAttribute("target", "_blank");

  moviesBox.appendChild(div);

  p.innerHTML = movieData.name;
  img.src = movieData.image.medium;
  p1.innerHTML = movieData.summary;
  a.innerHTML = "See more on IMDB!";
};

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  addMovie(data);
}

getapi("https://api.tvmaze.com/shows/1");
getapi("https://api.tvmaze.com/shows/2");
getapi("https://api.tvmaze.com/shows/3");*/