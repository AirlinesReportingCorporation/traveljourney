import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Drawer, Button} from 'antd';
import {useSwipeable, Swipeable} from 'react-swipeable'
import './Startpage.scss';
import Slider from '../components/Slider.jsx';
import Pageslide from '../components/Pageslide.jsx';

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  scrollHandler(e) {}

  render() {

    return (<div className="startPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="verticalSlide slide1">
          <h1>The
            <br/>Travel
            <br/>Journey</h1>
          <img src="img/startPageIcon1.png" alt=""/>
          <p>Tap Here to Begin</p>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="verticalSlide textSlide textSlide1">
          <h1>The travel
            <br/>journey is
            <br/>complex, and
            <br/>it is becoming
            <br/>increasingly
            <br/>personalized.</h1>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="verticalSlide textSlide textSlide2">
          <h1>It begins with
            <br/>a spark of
            <br/>
            travel inspira-
            <br/>tion, spans the
            <br/>entirety of trip
            <br/>planning and
            <br/>continues
            <br/>through the
            <br/>trip itself.
          </h1>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="verticalSlide textSlide textSlide1">
          <h1>The travel
            <br/>journey is
            <br/>complex, and
            <br/>it is becoming
            <br/>increasingly
            <br/>personalized.</h1>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Startpage;
