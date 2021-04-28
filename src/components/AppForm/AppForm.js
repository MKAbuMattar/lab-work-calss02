import React, { Component } from 'react';
import { Row, Form } from 'react-bootstrap';

export default class AppForm extends Component {

  selectState = (num) => {
    this.props.updateData(num);
  };

  filter = (event) => {
    event.preventDefault();
    this.props.filterData(event);
  }

  render() {
    return (
      <>
        <Row
          className="justify-content-md-center"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <Form>
            <Form.Group>
              <Form.Label
                className="my-1 mr-sm-2"
                style={{ fontSize: '1.4rem' }}
              >
                Select Number of Horns in The Beast:
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={this.selectState}
                onClick={this.filter}
                className="my-1 mr-sm-2"
                defaultValue={this.props.numHorn}
              >
                <option value="displayAll">Display All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Row>
      </>
    );
  }
}
