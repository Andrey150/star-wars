import React,{ Component } from "react";
import Row from "../row";
import { StarshipList } from "../sw-components/elemets-lists";
import StarshipDetails from "../sw-components/starship-details";

export default class StarshipPage extends Component {

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
        leftEl={<StarshipList onItemSelected={this.onItemSelected} />} 
        rightEl={<StarshipDetails itemId={selectedItem}/> }
      /> 
    )
  }
}