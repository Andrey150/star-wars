import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

import './error-boundry.css'

export default class ErrorBoundry extends Component {

  state= {
    hasError: false
  }

   /**
   * componentDidCatch позволяет отследить ошибку и изолировать компоненты, 
   * чтобы избежать падения всего приложения
   */
   componentDidCatch() {
    this.setState({ 
      hasError: true 
    })
  }

  render() {

    if (this.state.hasError) {
      <ErrorIndicator/>
    }

    return (
      // Возвращает любой элемент
      this.props.children
    )
  }
}