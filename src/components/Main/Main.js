import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Data from '../../data/data.json';

import HornedBeast from '../HornedBeast/HornedBeast';
import Header from '../Header/Header';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Data
    };
    this.JSONFileSelect = this.JSONFileSelect.bind(this);
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
    let x = (Math.floor((Math.random() * (this.state.data.length - 1)) + 1));
    return (
      <>
        <Header
          image={this.state.data[x].image_url}
          title={this.state.data[x].title}
          description={this.state.data[x].description}
        />
        <div className="whiteSpace"></div>
        <Container fluid>
          <Row className="justify-content-md-center">
            {this.state.data.map(result => (
              <Col md="auto">
                <HornedBeast
                  key={result.keyword}
                  title={result.title}
                  image={result.image_url}
                  description={result.description}
                  horns={result.horns}
                />
              </Col>
            ))}
          </Row>
        </Container>

      </>
    );
  }
}
