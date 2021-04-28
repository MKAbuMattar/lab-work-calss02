import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beasts: ''
    };
  }

  render() {
    return (
      <header>
        <section className="grid hero">
          <div className="heroImgBox">
            <img className="heroImg" src={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} alt="" />
          </div>
          <div className="heroOverlay"></div>
          <div className="heroTextBox">
            <div className="grid-center heroInfo">
              <h1 className="heroTitle">Horned Beast</h1>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
