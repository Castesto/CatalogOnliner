import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

import { Header } from './components/layout/Header'
import { Main } from './components/layout/Main'

class App extends Component {

  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    );
  }
}

export default App;
