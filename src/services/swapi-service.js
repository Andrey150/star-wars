// Получаем ответ сервера и ждем, пока результут не будет доступен,
// когда результат будет доступен - он запишется в res
// Затем то же самое проделет с body

// Cоздаем класс-cервис для api
export default class SwapiService {

  // Сообщает, что это приватная часть класса, которую нельзя 
  // использовать или изменять снаружи
  _apiBase = 'https://swapi.dev/api';
  _imageBase = `https://starwars-visualguide.com/assets/img`

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    // Возвращает ошибку схожую с ошибкой сети, если объект не найден
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }
    return await res.json()
  }

  // Делаю запрос для получения людей
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    // Возвращаю результат
    return res.results.map(this._transformPeople)
  }

  getPeople = async (id) => {
    const people = await this.getResource(`/people/${id}/`)
    return this._transformPeople(people)
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets`)
    return res.results.map(this._transformPlanet)
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship =  await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship)
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  /**
   *
   * @param item
   * @returns {string} - достаю id из url
   * @private
   */

  _extractId = (item) => {
    // https://regex101.com/
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  /**
   *
   * @param planet - параметр
   * @returns {{rotationPeriod: *, diameter: *, name: *, id: *, population: *}}
   * @private - получаю и преобразовываю данные в формат, который будет требоваться
   */

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredit: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    }
  }

  _transformPeople = (people) => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color

    }
  }
}

// const swapi = new SwapiService()

// swapi.getAllPerson().then((people) => {
//   people.forEach((pers) => {
//     return pers.name
//   })
// })

// swapi.getPerson(3).then((person) => {
//   console.log(person)
// })

// getResource('https://swapi.dev/api/people/1')
//   .then((body) => {
//     console.log(body)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


//Особенностью fetch api является то, что ответ может содержать не весь ответ сервера,
// если получил ответ, значит что сервер ответил, для получения тела нужно сделать еще запрос

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     return res.json()
//   })
//   .then((body) => {
//     console.log(body)
//   })


