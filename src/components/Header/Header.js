import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <section className="grid hero">
          <div className="heroImgBox">
            <img className="heroImg" src={this.props.image} alt="" title="" />
          </div>
          <div className="heroOverlay"></div>
          <div className="heroTextBox">
            <div className="grid-center heroInfo">
              <h1 className="heroTitle">React State and Props</h1>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
