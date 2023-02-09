import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/index'

import './random-planet.css';

export default class RandomPlanet extends Component {  

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

// на основе render создается виртуальный DOM ->
// -> componentDidMount -> перестраивает DOM -> браузер отрисовывает стр
  componentDidMount() {
    const { updateInterval } = this.props
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  // Вызывается перед тем, как компонент будет удален, но на мемент вызова, 
  // компонент все еще будет в DOM стоит использовать для очистки ресурсов, 
  // запросов к серверу, clearInterval и тп

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // => лучше использовать, если буду передавать эту fn в другую fn
  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updatePlanet = () => {
    const id = Math.floor((Math.random() * 19) + 1);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {

    const { planet, loading, error } = this.state

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
/**
 * Применяется, если пропсом не было передано другое значение
 * срабатывает раньше, чем propTypes
 */
RandomPlanet.defaultProps = {
  updateInterval: 15000
}

/**
 * Если в пропс вместо числа придет что-то другое, то появится ошибка в консоли
 */
RandomPlanet.propTypes = {
  //С испотзованием библиотеки
  // isRequired - отмечает, что свойство обязательное, 
  // т.к есть defaultProps, свойство не я вляется обязательным
  updateInterval: PropTypes.number

  // updateInterval: ( props, propName, componentName ) => {
  //   const value = props[propName];

  //   if ( typeof value === 'number' && !isNaN(value)) {
  //     return null
  //   }
  //   return new TypeError(`${componentName}: ${propName} must ne number`)
  // }
}

const PlanetView = ({planet}) => {
  const {
    id,
    name,
    population,
    rotationPeriod,
    diameter
  } = planet

  return (
    <>
      <img
          alt='planet'
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </>
  )
}