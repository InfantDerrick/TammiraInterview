import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PostView from './components/PostView'
import Async from 'react-async';
import { createStore } from 'redux'

class App extends Component{
  render() {
    return (

      <PostView/>

    )
  }
}

export default App;
