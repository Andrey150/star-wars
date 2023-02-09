import React from 'react';
import ItemDetails, { Record} from '../item-detail';
import withSwapiService  from '../hoc-helpers/with-swapi-service'

const PersonDetails = ( props ) => {

  return (
    /**
     * Т.к имена имена ItemDetails совпадают с именами пропсов, 
     * можно заменить на пропсы
    */
    <ItemDetails  { ...props }
      // itemId={itemId} 
      // getData={getPeople} 
      // getImageUrl={getPersonImage}
    >
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  )
}; 

const mapMethodsToProps = ( swapiService ) => {
  return {
    getData: swapiService.getPeople,
    getImageUrl: swapiService.getPersonImage
  }
}

// При вызове PersonDetails он будет обернут в withSwapiService, 
// в котором содержится вызов swapiService для получения данных
export default withSwapiService(mapMethodsToProps)(PersonDetails);