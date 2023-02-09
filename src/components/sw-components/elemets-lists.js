import React from "react";
import ItemList from '../item-list/index';
import withData from '../hoc-helpers/with-data';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import compose from '../hoc-helpers/compose'

const withChildFunction = ( fn ) => ( Wrapped ) => {
  return ( props ) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({name}) => <span>{name}</span> //fn
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span> //fn

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

// Создаю компонент, 
// который будет вызывать render-функцию вместо вызова внутри App
const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)
const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)
const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList)

export { 
  PersonList, 
  PlanetList, 
  StarshipList 
};