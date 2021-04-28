import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

export default class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.hornedBeastInfo.title}</Modal.Title>
          </Modal.Header>
          <div style={{ margin: '0 auto' }}>
            <Card >
              <Card.Img
                variant="top"
                src={this.props.hornedBeastInfo.image}
                alt={this.props.hornedBeastInfo.description}
                title={this.props.hornedBeastInfo.title}
              />
              <Card.Body>
                <Card.Title>{this.props.hornedBeastInfo.title}</Card.Title>
                <Card.Text>Description: {this.props.hornedBeastInfo.description}</Card.Text>
                <Card.Text>Number of Horns: {this.props.hornedBeastInfo.horns}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
