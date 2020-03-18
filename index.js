import { films } from '../PersonalPorfolio/films';
import { species } from '../PersonalPorfolio/species'


//Films
const filmsDiv = document.querySelector('.films');

const filmsList = document.createElement("ul")

let counter = 1

films.forEach(movie => {
    let listItem = document.createElement("li")
    listItem.textContent = movie.title
    filmsList.appendChild(listItem)

    let imageItem = document.createElement("img")
    imageItem.src = 'https://starwars-visualguide.com/assets/img/films/${counter}.jpg'

    filmsList.appendChild(imageItem)

    counter++
})

filmsDiv.appendChild(filmsList)


// Species
const speciesDiv = document.querySelector('.species');

const speciesList = document.createElement("ul")

let counter = 1

species.forEach(race => {
    let listItem = document.createElement("li")
    listItem.textContent = race.name
    speciesList.appendChild(listItem)

    let imageItem = document.createElement("img")
    imageItem.src = 'https://starwars-visualguide.com/assets/img/species/${counter}.jpg'

    speciesList.appendChild(imageItem)

    counter++
})

speciesDiv.appendChild(speciesList)