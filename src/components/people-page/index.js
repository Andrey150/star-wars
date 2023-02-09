import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../item-detail";
import Row from "../row";

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  }

  onPersonSelected = ( id ) => {
      this.setState({
        selectedPerson: id
      })
    }
  
  render() {

    if (this.state.hasError) {
      <ErrorIndicator/>
    }

    const itemList = (
      <ItemList 
        onItemSelected = { this.onPersonSelected }
        getData={this.swapiService.getAllPeople}
      >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    );
    

    const personDetails = 
    <ErrorBoundry>
      <PersonDetails personId={this.state.selectedPerson} />
    </ErrorBoundry>

    return (
      <Row leftEl={itemList} rightEl={personDetails} /> 
    )
  }
}