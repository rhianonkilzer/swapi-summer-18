import Person from "../models/Person.js";
import Planet from "../models/Planet.js";
import Starship from "../models/Starship.js";


export default class SwapiService {



  getPeople(draw) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          return new Person(rawPerson)
        })
        draw(myPeople)
      })
      .catch(err =>{

      })

    console.log("HERE I AM")
  }



  getStarships(draw) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(res => {
        let myStarship = res.results.map(rawStarship => {
          return new Starship(rawStarship)
        })
        draw(myStarship)
      })
      .catch(err =>{

      })

    console.log("HERE I AM")
  }


  // // getStarships(draw) {
  //   console.log("HELLO FROM SWAPISERVICE")
  //   fetch('https://swapi.co/api/starships')
  //     .then(res => res.json())
  //     .then(draw)
  //     .catch(err=>{
  //     console.log(err)
  //     })

  //   console.log("HERE I AM")
  // }

  
  
  getPlanets(draw) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/planets')
      .then(res => res.json())
      .then(res => {
        let myPlanet = res.results.map(rawPlanet => {
          return new Planet(rawPlanet)
        })
        draw(myPlanet)
      })
      .catch(err =>{

      })

    console.log("HERE I AM")
  }

}