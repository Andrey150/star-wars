import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Layout from '../layout/index';
import SwapiService from '../../services/swapi-service';
import {
  SwapiServiceProvider
} from '../swapi-service-context/swapi-service-context'
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';
import StarshipInformation from '../info/starship-info'

import './app.css';

const MainPage = () => {
  return <h1> Hello, friend!</h1>
}

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
        <Router>
          <div className='sw-app'>
            {/* <Header onServiceChange={this.onServiceChange}/> */}
            <Routes>
              <Route path='/' element={<Layout onServiceChange={this.onServiceChange}/>}>
                <Route path='/' element={<MainPage/>} />
                <Route path='peoples' element={<PeoplePage/>} />
                <Route path='planets' element={<PlanetPage/>} />
                <Route path='starships' element={<StarshipPage/>} />
                <Route path=':category/:id' element={<StarshipInformation/>} />
              </Route>
            </Routes>
          </div>
        </Router>
       </SwapiServiceProvider>
    );
  } 
};