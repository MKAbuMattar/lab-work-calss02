import React, { Component } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Main />
        <div className="whiteSpace"></div>
        <Footer />
      </>
    )
  }
}
