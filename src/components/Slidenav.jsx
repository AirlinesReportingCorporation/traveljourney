import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import './Slidenav.scss';

class Slidenav extends React.Component {
  constructor(props) {
    super(props);

    this.homeClick = this.homeClick.bind(this);
  }

  homeClick() {
    console.log("clicky-click");
  }

  render() {
    return (<div className="slideControls">

      <Link to="/navigation/">
        <div className="animated pulse infinite arcBtn">
          <img src="img/arcIcon.png" alt="ARC's Perspective"/>
        </div>
      </Link>

      <Link to="/navigation/">
        <div className="navBtn">
          <img src="img/homeIcon.png" alt="Home Icon"/>
        </div>
      </Link>

      <Link to="/navigation/">
        <div className="navBtn">
          <img src="img/ellipsisIcon.png" alt="More"/>
        </div>
      </Link>

      <button onClick={this.homeClick}>
        test
      </button>

    </div>);
  }
}

export default Slidenav;
