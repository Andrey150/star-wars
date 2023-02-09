import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator';

const withData = ( View ) => {
  return class extends Component{

    state = {
      data: null,
      error: false,
      loading: true
    }

    componentDidUpdate(prevProps){
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }
  
    /**
    * Получаю список персонажей и помещаю в state
    * Лучше обращаться к api внутри componentDidMount
    */
    componentDidMount(){  
      this.update()
             
    }

    update(){
      this.setState({
        loading: true,
        error: false
      })
      this.props.getData()
      .then((data) => {
        this.setState({
          data,
          loading: false
        })      
      })
      .catch(this.onError) 
    }

    onError = (err) => {
      this.setState({
        error: true,
        loading: false
      }); 
    }

    render() {

      const { data, error, loading  } = this.state

      if (loading) {
        return <Spinner/>
      }

      if (error) {
        <ErrorIndicator/>
      }

      return <View {...this.props} data={data} />
    }
  }
}


export default withData