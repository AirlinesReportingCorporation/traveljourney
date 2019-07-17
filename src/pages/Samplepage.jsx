import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Drawer, Button} from 'antd';
import './Samplepage.scss';

class Samplepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  render() {
    return (<div className="samplePage">
      <div className="sampleContent">
        <h1>Lorem<br/>Ipsum<br/>Dolor Amet</h1>
        <div className="startBtn" href="#" onClick={this.showDrawer}>
          Touch Here to Start
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
    </div>);
  }
}

export default Samplepage;
