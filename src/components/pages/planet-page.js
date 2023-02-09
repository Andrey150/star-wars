import React,{ Component } from "react";
import Row from "../row";
import { PlanetList } from "../sw-components/elemets-lists";
import PlanetDetails from "../sw-components/planet-details";

export default class PlanetPage extends Component {

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
        leftEl={<PlanetList onItemSelected={this.onItemSelected} />} 
        rightEl={<PlanetDetails itemId={selectedItem}/> }
      /> 
    )
  }
}