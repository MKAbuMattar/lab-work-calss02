import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HornedBeast from '../HornedBeast/HornedBeast';

export default class Main extends Component {

  render() {
    return (
      <>
        <Container fluid>
          <Row className="justify-content-md-center">
            {this.props.data.map(result => (
              <Col md="auto">
                <HornedBeast
                  key={result.keyword}
                  title={result.title}
                  image={result.image_url}
                  description={result.description}
                  horns={result.horns}
                  getHornedBeastInfo={this.props.getHornedBeastInfo}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
