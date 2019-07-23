import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import './Slidenav.scss';
import Customlink from './Customlink.jsx';

class Slidenav extends React.Component {
  constructor(props) {
    super(props);

    this.homeClick = this.homeClick.bind(this);
  }

  homeClick() {
    console.log("clicky-click");
  }

  render() {
    const showSlideCtrls = this.props.display;

    let controls;
    if (showSlideCtrls) {
      controls = <div className="slideBtnContainer">
        <div className="arrow1"><img src="" alt=""/></div>
        <div className="arrow2"><img src="" alt=""/></div>
      </div>;
    }

    console.log(React.Children.count(this.props.children));

    return (<div className="slideControls">

      <Link to="/navigation/">
        <div className="animated pulse infinite arcBtn">
          <img src="img/arcIcon.png" alt="ARC's Perspective"/>
        </div>
      </Link>

      <Customlink to="/navigation/">
        <div className="navBtn">
          <img src="img/homeIcon.png" alt="Home Icon"/>
        </div>
      </Customlink>

      {controls}

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
