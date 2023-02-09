import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-detail.css';

const Record = ( {item, label, field} ) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span> { item[field] } </span>
    </li>
  )
}

export {Record};

export default class ItemDetails extends Component {

  state = {
    item: {},
    image: null,
    error: false,
    loading: true
  }

  // первый раз обновляем персонажа при создании объекта
  componentDidMount() {
    this.updateItem();
  }

  // обновляем персонажа, если он обновился
  componentDidUpdate(prevProps){
    // setState приведет к обновлению, будет вызван componentDidUpdate, 
    // без этого условия попаду в бесконечный цикл
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl) {
        this.setState({loading : true})
        this.updateItem();
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  /**
   * Получает персонажа по клику на список
   * @returns возвращает выбранного персонажа
   */
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    if (!itemId) {
      return 
    }

    // Получаем данные персонажа, когда даннеы будут получены, помещаем их в state
    getData(itemId)
      .then((item) => {
        this.setState({ 
          item, 
          loading: false, 
          image: getImageUrl(item) 
        })
      })
      .catch(this.onError)
  }

  render() {
    const { item, image } = this.state;
    
    if (!image) {
      return <span>Select a item from a list</span>;
    }
    const { name } = item    

    return (
      <div className="item-details card">
         <img className="item-image"
          alt='item'
          src={image} />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) =>{
                return React.cloneElement(child, { item })
              }) 
            }
          </ul>
        </div>
      </div>
    )
  }
}