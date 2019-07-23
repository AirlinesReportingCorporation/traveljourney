import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import './Slidenav.scss';
import Customlink from './Customlink.jsx';

class Slidenav extends React.Component {
  constructor(props) {
    super(props);

    this.arrowClick = this.arrowClick.bind(this);
  }

  homeClick() {
    console.log("clicky-click");
  }

  arrowClick(direction) {
    var slideHeight = 1920;
    var slideCount = this.props.slideCount;
    var curPos = document.documentElement.scrollTop;

    var min = 0;
    var max = slideCount * slideHeight;
    var closest = 0;

    if (direction == "up") {
      if (curPos >= slideHeight) {
        var rem = Math.ceil(curPos / slideHeight);
        closest = (rem - 1) * slideHeight;
      } else {
        closest = 0;
      }
    } else if (direction == "down") {
      if (curPos <= ((slideCount - 1) * slideHeight)) {
        var rem = Math.round(curPos / slideHeight);
        closest = (rem + 1) * slideHeight;
      } else {
        closest = (slideCount - 1) * slideHeight;
      }
    }

    window.scroll({top: closest, left: 0, behavior: 'smooth'});

  }

  render() {
    const showSlideCtrls = this.props.display;

    let controls;
    if (showSlideCtrls) {
      controls = <div className="slideBtnContainer">
        <div onClick={() => this.arrowClick('up')} className="slideArrow slideArrow1"><img src="img/slideArrow.png" alt=""/></div>
        <div onClick={() => this.arrowClick('down')} className="slideArrow slideArrow2"><img src="img/slideArrow.png" alt=""/></div>
      </div>;
    }

    console.log(React.Children.count(this.props.children));

    return (<div className="slideControls">

      <Link to="/navigation/">
        <div className="animated pulse infinite arcBtn">
          <img src="img/arcIcon.png" alt="ARC's Perspective"/>
        </div>
      </Link>

      <Link to="/">
        <div className="navBtn">
          <img src="img/homeIcon.png" alt="Home Icon"/>
        </div>
      </Link>

      {controls}

      <Customlink to="/navigation/">
        <div className="navBtn">
          <img src="img/ellipsisIcon.png" alt="More"/>
        </div>
      </Customlink>

    </div>);
  }
}

export default Slidenav;
