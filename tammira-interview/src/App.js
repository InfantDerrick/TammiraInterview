import React, { Component} from 'react';
import './App.css';
import PostView from './components/PostView'
import ModalForm from './components/ModalForm'
import NavView from './components/NavView'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component{
  render() {
    return (
      <>
        <Provider store = {store}>
          <NavView/>
          <PostView/>
          <ModalForm/>
        </Provider>
      </>
    )
  }
}

export default App;
