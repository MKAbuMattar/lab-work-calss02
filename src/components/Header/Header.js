import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <section className="grid hero">
          <div className="heroImgBox">
            <img className="heroImg" src={this.props.image} alt={this.props.description} title={this.props.title} />
          </div>
          <div className="heroOverlay"></div>
          <div className="heroTextBox">
            <div className="grid-center heroInfo">
              <h1 className="heroTitle">{this.props.title}</h1>
              <p className="heroDescription">{this.props.description}</p>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
