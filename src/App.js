import React, { Component } from 'react';

import Data from './data/data.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SelectedBeast from './components/SelectedBeast/SelectedBeast';
import AppForm from './components/AppForm/AppForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      show: false,
      hornedBeastInfo: {},
      numHorn: 'displayAll'
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

  filterData = () => {
    if (this.state.numHorn !== 'displayAll') {
      this.setState({
        data: Data.filter((result) => result.horns === Number(this.state.numHorn))
      });
    } else {
      this.setState({ data: Data });
    }
  }

  updateData = (horn) => {
    this.setState({
      numHorn: horn.target.value
    });
  };

  render() {
    return (
      <>
        <SelectedBeast
          show={this.state.show}
          hornedBeastInfo={this.state.hornedBeastInfo}
          handleClose={this.handleClose}
        />
        <Header />
        <div className="whiteSpace"></div>
        <AppForm
          filterData={this.filterData}
          updateData={this.updateData}
          numHorn={this.props.numHorn}
        />
        <div className="whiteSpace"></div>
        <Main data={this.state.data} getHornedBeastInfo={this.getHornedBeastInfo} />
        <div className="whiteSpace"></div>
        <Footer />
      </>
    );
  }
}
