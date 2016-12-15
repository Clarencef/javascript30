import '../stylesheets/javascript30.scss';
import 'whatwg-fetch';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const placeLists = document.querySelector('.place_lists');
const searchInput = document.querySelector('.search_input');
const search_button = document.querySelector('.search_button');

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function displayMatches(e) {
  e.preventDefault();
  const searchVal = searchInput.value;
  const matchCities = getMatches(searchVal, cities);
  const highlightRegex = new RegExp(searchVal, "gi");
  let formatNum, highlightSearchCity, highlightSearchState;
  let htmltoInsert;
  if (searchVal === ".") {
    return;
  }
  if (matchCities) {
    if (matchCities.length === 0) {
      placeLists.innerHTML = `<li class="list_placeholder">no result,please try other name</li>`
    } else {
      htmltoInsert = matchCities.map((place) => {
        formatNum = numberWithCommas(place.population);
        highlightSearchCity = place.city.replace(highlightRegex, `<span class="hl">${searchVal}</span>`);
        highlightSearchState = place.state.replace(highlightRegex, `<span class="hl">${searchVal}</span>`);
        return `<li><span>${highlightSearchCity},${highlightSearchState}</span><span>${formatNum}</span></li>`
      }).join("");
      placeLists.innerHTML = htmltoInsert;
    }
  }
}

search_button.addEventListener('click', displayMatches);