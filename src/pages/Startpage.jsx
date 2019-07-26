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
    this.tapBegin = this.tapBegin.bind(this);
  }

  tapBegin() {
    window.scroll({top: 0, left: 1080, behavior: 'smooth'});
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
          <span onClick={this.tapBegin}>
            <h1>The
              <br/>Travel
              <br/>Journey</h1>
            <img className="animated tada" src="img/startPageIcon1.png" alt=""/>
            <p>Tap Here to Begin</p>
            <img className="startPageArrow" src="img/startPageArrow.png" alt=""/></span>
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
          <img src="img/startPageIcon2.png" alt=""/>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="verticalSlide textSlide textSlide2">
          <img src="img/startPageIcon3.png" alt=""/>
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
        <div className="verticalSlide textSlide textSlide3">
          <div className="textSlideTop">
            <h1>See how the
              <br/>travel industry
              <br/>can create a
              <br/>more seamless,
              <br/>integrated
              <br/>travel journey,
              <br/>from beginning
              <br/>to end.
            </h1>/>
            <img src="img/startPageIcon4.png" alt=""/>
          </div>
          <div className="textSlideBottom">
            <p>Explore the Travel Journey.</p>
            <button>Let's Go</button>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className=" verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 1</div>
              <h1>Inspire.</h1>
              <div className="sep"></div>
              <p>The traveler is inspired
                <br/>to take a trip.</p>
              <img src="img/inspire1.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button onClick={this.exploreClick}>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="shopPage verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 2a</div>
              <h1>Shop.</h1>
              <div className="sep"></div>
              <p>The traveler searches for a flight
                <br/>within their desired parameters.</p>
              <img src="img/Shop.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="offerPage verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 2b</div>
              <h1>Offer.</h1>
              <div className="sep"></div>
              <p>After the traveler searches for a flight,
                <br/>the industry responds with an offer.</p>
              <img src="img/Offer.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="purchasePage verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 3</div>
              <h1>Purchase.</h1>
              <div className="sep"></div>
              <p>The traveler searches for a flight
                <br/>within their desired parameters.</p>
              <img src="img/Purchase.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="pretripPage verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 4</div>
              <h1>Pre-Trip.</h1>
              <div className="sep"></div>
              <p>The traveler actively prepares
                <br/>for their trip.</p>
              <img src="img/Pretrip.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="tripPage verticalSlide titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 3</div>
              <h1>Trip.</h1>
              <div className="sep"></div>
              <p>The traveler searches for a flight <br/>within their desired parameters.</p>
              <img src="img/Trip.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="outcomePage titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 3</div>
              <h1>Outcome.</h1>
              <div className="sep"></div>
              <p>The traveler searches for a flight
                <br/>within their desired parameters.</p>
              <img src="img/Outcome.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Startpage;
