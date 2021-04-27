import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import HornedBeastInfo from '../HornedBeastInfo/HornedBeastInfo';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0,
      toggle: false
    };
  }

  IncresasNumberOfFavorites = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1,
      toggle: this.state.toggle === false ? true : false
    });
  }

  toggleFun = () => {
    this.setState({
      toggle: this.state.toggle === false ? true : false
    });
  }

  render() {
    return (
      <>
        <HornedBeastInfo
          toggle={this.toggleFun}
          display={this.state.toggle}
          title={this.props.title}
          image={this.props.image}
          description={this.props.description}
          horns={this.props.horns}
          numOfFavorites={this.state.numberOfFavorites}
        />
        <Card key={this.props.key} >
          <Card.Img
            onClick={this.IncresasNumberOfFavorites}
            variant="top"
            src={this.props.image}
            alt={this.props.description}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ❤ {this.state.numberOfFavorites}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
