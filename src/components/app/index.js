import React, {Component} from 'react';
import Header from '../header/index';
import RandomPlanet from '../random-planet/index';
import SwapiService from '../../services/swapi-service';
import {
  SwapiServiceProvider
} from '../swapi-service-context/swapi-service-context'
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';

import './app.css';


export default class App extends Component {

  state = {
    selectedPerson: null,
    // Добавление в state позволит переключаться между серверами 
    // (в т.ч локальными, тестовыми данными)
    swapiService : new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      //Один из SwapiService нужно заменить на др значение, у меня нет 
      const Service = swapiService instanceof SwapiService ? 
      SwapiService : SwapiService
      console.log('switched to' , Service.name)

      return {
        swapiService: new Service()
      }
    })
  }

  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className='sw-app'>
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet />
          <PeoplePage/>
          <PlanetPage/>
          <StarshipPage/>          
        </div>
       </SwapiServiceProvider>
    );
  } 
};