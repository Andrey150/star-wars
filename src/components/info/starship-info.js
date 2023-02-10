import React from 'react';
import {useParams} from 'react-router-dom'
import ItemDetails, { Record} from '../item-detail';
import withSwapiService  from '../hoc-helpers/with-swapi-service' 

const StarshipInformation = (  ) => {

  /**
   * Распарсить url, вытащить оттуда категорию 
   * и сделать запрос на сервер по категории и id
   */
  const {id} = useParams();
  console.log(id)
  return (   
    <h1>Hi</h1> 
    // <div className="item-details card">
    //   <img className="item-image"
    //     alt='item'
    //     src={image} />

    //   <div className="card-body">
    //     <h4>{ name }</h4>
    //     <ul className="list-group list-group-flush">
    //       { 
    //         React.Children.map(this.props.children, (child) =>{
    //           return React.cloneElement(child, { item })
    //         }) 
    //       }
    //     </ul>
    //   </div>
    // </div>
  )
}; 

export default StarshipInformation