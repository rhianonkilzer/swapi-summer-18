import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <div id="starships"></div>
  <button onclick="app.controllers.swapi.getPlanets()">Get Planets</button>
  <div id="planets"></div>
  <button onclick="app.controllers.swapi.getPeople()">Get People</button>
  <div id="people"></div>
  `
}

function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.results.forEach(starship => {
    template += `<div>
    ${starship.name}
    </div>`
  })

  starshipsElem.innerHTML = template

}

function drawPlanets(data) {
  let planetsElem= document.getElementById('planets')
  let template = ''
  data.results.forEach(planet=> {
    template += `<div>
    ${planet.name}
    </div>`
  })
  planetsElem.innerHTML = template
}


function drawPeople(data) {
  let peopleElem= document.getElementById('people')
  let template = ''
  data.results.forEach(person=> {
    template += `<div>
    ${person.name}
    </div>`
  })
  peopleElem.innerHTML = template
}

// function drawError(error) {
//   console.log(error)
//   document.getElementById('error').innerHTML = error.message
// }


export default class SwapiController {
  constructor() {
    draw()
  }

  getStarships() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getStarships(console.log)
  }

getPlanets() {
  swapiService.getPlanets(console.log)
}
}