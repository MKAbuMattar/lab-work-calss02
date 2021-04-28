import React, { Component } from 'react';

import Data from './data/data.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SelectedBeast from './components/SelectedBeast/SelectedBeast';

export default class App extends Component {

  constructor(props) {
    let getNumberRandom = (Math.floor((Math.random() * (20 - 1)) + 1));
    super(props);
    this.state = {
      data: Data,
      show: false,
      hornedBeastInfo: {},
      num: getNumberRandom
    };
    this.JSONFileSelect = this.JSONFileSelect.bind(this);
  }

  getHornedBeastInfo = (beastInfo) => {
    this.setState({
      show: true,
      hornedBeastInfo: beastInfo
    });
  }

  handleClose = () => {
    this.setState({
      show: false,
      hornedBeastInfo: {}
    });
  }

  display(content) {
    this.setState({
      data: content
    });
  }

  JSONFileSelect(event) {
    let files = event.target.files;
    let file = files[0];
    let that = this;
    let reader = new FileReader();
    reader.onload = (e) => {
      that.display(e.target.result);

    };
    reader.readAsText(file);
  }

  render() {
    return (
      <>
        <SelectedBeast
          show={this.state.show}
          hornedBeastInfo={this.state.hornedBeastInfo}
          handleClose={this.handleClose}
        />
        <Header
          image={this.state.data[this.state.num].image_url}
          title={this.state.data[this.state.num].title}
          description={this.state.data[this.state.num].description}
        />
        <div className="whiteSpace"></div>
        <Main data={this.state.data} getHornedBeastInfo={this.getHornedBeastInfo} />
        <div className="whiteSpace"></div>
        <Footer />
      </>
    );
  }
}
