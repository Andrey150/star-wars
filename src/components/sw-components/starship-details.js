import React from 'react';
import ItemDetails, { Record} from '../item-detail';
import withSwapiService  from '../hoc-helpers/with-swapi-service'

const StarshipDetails = ( props ) => {
  
  return (
    <ItemDetails 
      {...props}
    >
      <Record field='name' label='Name' /> 
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='costInCredit' label='Cost' />
    </ItemDetails>
  )
}; 

const mapMethodsToProps = ( swapiService ) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);