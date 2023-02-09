import React,{ Component } from "react";
import Row from "../row";
import { PersonList } from "../sw-components/elemets-lists";
import PersonDetails from "../sw-components/person-details";

export default class PeoplePage extends Component {

  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  }

  render() {

    const { selectedItem } = this.state

    return (
      <Row 
        leftEl={<PersonList onItemSelected={this.onItemSelected} />} 
        rightEl={<PersonDetails itemId={selectedItem}/> }
      /> 
    )
  }
}