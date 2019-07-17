import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Drawer, Button} from 'antd';
import {useSwipeable, Swipeable} from 'react-swipeable'
import './Startpage.scss';
import Slider from '../components/Slider.jsx';

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

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  scrollHandler(e) {

  }

  render() {

    const config = {
      onSwipedLeft: () => console.log("testLeft"),
      onSwipedRight: () => console.log("testRight"),
      trackMouse: true
    }

    return (<Swipeable {...config}>
      <div className="startPage">
        <Slider num="3" onSwiped={this.scrollHandler}>

          <div className="slides slide-1 backgroundSample">
            <div className="slideContent">
              If you don't get the experience right, not much else matters.
            </div>
          </div>

          <div className="slides slide-1">
            <div className="slideContent">
              <div className="titleSub">Explore</div>
              <div className="maintitle">The<br/>Travel<br/>Journey
                <div className="titleArrow"><img src="../img/titleArrow.svg"/></div>
              </div>

            </div>

          </div>
          <div className="slides slide-1">
            <div>
              <div className="stepNumber">Step 1</div>
              <div className="stepTitle">
                <span className="stepHighlight">Inspiration.</span>
                The traveler is inspired to take a trip.</div>
              <div>
                <div className="startBtn" href="#" onClick={this.showDrawer}>
                  Learn More &raquo;
                </div>
              </div>
            </div>

            <Drawer placement="right" width="800px" closable={true} onClose={this.onClose} visible={this.state.visible}>
              <h2>Inspiration
              </h2>
              <p>The inspiration to travel can come from any number of sources: the desire to take a vacation, the need to take a business trip, or a desire to visit family.
              </p>
              <p>Inspiration can also be sparked by marketing promotions, deals and offers. By better analyzing travel data, organizations can create more personalized promotions to inspire active trip planning.</p>
              <hr/>
              <h3>Opportunities</h3>
              <p>
                <strong>Smarter Marketing</strong>: NDC and ONE Order create richer data and opportunities for personalization based on past buying behavior.</p>
              <h3>ARC's Role</h3>
              <ul>
                <li>Global Air Travel Data: ARC has the world’s most comprehensive air travel data, which can be used to make more informed decisions about retailing strategy.</li>
                <li>Universal Traveler Profile: This would enable travelers’ preferences to be reflected in every purchasing channel — enabling more personalized marketing efforts to inspire travel.</li>
              </ul>

            </Drawer>
          </div>
        </Slider>

      </div>
    </Swipeable>);
  }
}

export default Startpage;
