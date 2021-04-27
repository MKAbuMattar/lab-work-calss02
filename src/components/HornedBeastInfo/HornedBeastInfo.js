import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

export default class HornedBeastInfo extends Component {

  render() {
    return (
      <>
        <Modal show={this.props.display}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <div style={{ margin: '0 auto' }}>
            <Card >
              <Card.Img
                variant="top"
                src={this.props.image}
                alt={this.props.description}
                title={this.props.title}
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  Description:{this.props.description}
                </Card.Text>
                <Card.Text>
                  Number of Horns: {this.props.horns}
                </Card.Text>
                <Card.Text>
                  ❤ {this.props.numOfFavorites}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggle}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
