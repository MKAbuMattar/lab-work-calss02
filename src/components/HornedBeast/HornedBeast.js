import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0
    }
  }

  IncresasNumberOfFavorites = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1
    })
  }
  render() {
    return (
      <>
        <Card key={this.props.key} >
          <Card.Img variant="top" src={this.props.image} alt={this.props.description} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              Favorites: {this.state.numberOfFavorites}
            </Card.Text>
            <Button variant="primary" onClick={this.IncresasNumberOfFavorites}>Vote</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}
