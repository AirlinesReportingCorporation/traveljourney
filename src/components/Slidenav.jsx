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

  arrowClick(direction) {
    var slideHeight = 1920;
    var slideWidth = 1080;
    var slideCount = this.props.slideCount;
    var curPosTop = document.documentElement.scrollTop;
    var curPosLeft = $('.startPage').css("margin-left");
    curPosLeft = parseInt(curPosLeft) * -1;

    var min = 0;
    var max = slideCount * slideHeight;
    var closestTop = 0;
    var closestLeft = 0;

    if (direction == "up") {
      if (curPosTop >= slideHeight) {
        var rem = Math.ceil(curPosTop / slideHeight);
        closestTop = (rem - 1) * slideHeight;
      } else {
        closestTop = 0;
      }
      window.scroll({top: closestTop, left: closestLeft, behavior: 'smooth'});
    } else if (direction == "down") {
      if (curPosTop <= ((slideCount - 1) * slideHeight)) {
        var rem = Math.round(curPosTop / slideHeight);
        closestTop = (rem + 1) * slideHeight;
      } else {
        closestTop = (slideCount - 1) * slideHeight;
      }
      window.scroll({top: closestTop, left: closestLeft, behavior: 'smooth'});
    } else if (direction == "right") {
      if (curPosLeft < ((slideCount - 1) * slideWidth)) {
        var rem = Math.round(curPosLeft / slideWidth);
        closestLeft = (rem + 1) * slideWidth;
      } else if (curPosLeft == ((slideCount - 1) * slideWidth)) {
        closestLeft = curPosLeft;
      } else {
        closestLeft = (slideCount - 1) * slideWidth;
      }
      $('.startPage').animate({
        marginLeft: closestLeft * -1 + 'px'
      }, 400, "linear");
    } else if (direction == "left") {

      if (curPosLeft >= slideWidth) {
        var rem = Math.ceil(curPosLeft / slideWidth);
        closestLeft = (rem - 1) * slideWidth;
      } else {
        closestLeft = 0;
      }
      $('.startPage').animate({
        marginLeft: closestLeft * -1 + 'px'
      }, 400, "linear");
    }

  }

  render() {
    const showSlideCtrls = this.props.display;
    const slideDirection = this.props.slideDirection;

    let controls;
    if (showSlideCtrls) {
      if (slideDirection == "vertical") {
        controls = <div className="slideBtnContainer">
          <div onClick={() => this.arrowClick('up')} className="slideArrow slideArrow1"><img src="img/slideArrow.png" alt=""/></div>
          <div onClick={() => this.arrowClick('down')} className="slideArrow slideArrow2"><img src="img/slideArrow.png" alt=""/></div>
        </div>;
      } else if (slideDirection == "horizontal") {
        controls = <div className="slideBtnContainer">
          <div onClick={() => this.arrowClick('left')} className="slideArrow slideArrow3"><img src="img/slideArrow.png" alt=""/></div>
          <div onClick={() => this.arrowClick('right')} className="slideArrow slideArrow4"><img src="img/slideArrow.png" alt=""/></div>
        </div>;
      }

    }

    return (<div className="slideControls">

      <Link to="/navigation/">
        <div className="animated pulse infinite arcBtn"> 
          <img src="img/arcIcon.png" alt="ARC's Perspective"/>
        </div>
      </Link>

      <Customlink to="/">
        <div className="navBtn">
          <img src="img/homeIcon.png" alt="Home Icon"/>
        </div>
      </Customlink>

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
