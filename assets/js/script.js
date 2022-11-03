const apiData = [];

const apiEndpoint = "http://api.tvmaze.com/show";

const section = document.getElementById("movies");
const numCards = 5;

const fetchShow = () => {
  fetch(apiEndpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiData.push(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      apiData[0].map((obj) => cards(obj));
    });
};
7;

const cards = (data) => {
  section.innerHTML += `
    <figure> 
    <img src=${data.image.medium} alt=${data.name}>
    <h2>${data.name}</h2>
    <p>${data.genres}</p>
    <p>${data.runtime} min</p>
    <p>${data.rating.average}</p> 

    </figure>
  `;
};

fetchShow();
