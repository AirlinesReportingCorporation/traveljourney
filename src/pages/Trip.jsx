import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {Modal, Drawer} from 'antd';

import './Trip.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleBlue: false,
      drawerContent: " ",
      visibleModal: false,
      modalContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.showDrawerBlue = this.showDrawerBlue.bind(this);
    this.onClose = this.onClose.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal(content) {
    this.setState({
      visibleModal: true,
      modalContent: content
    });
  };

  handleOk() {
   this.setState({
     visibleModal: false,
   });
 };

 handleCancel() {
   this.setState({
     visibleModal: false,
   });
 };

  showDrawer(content) {
    this.setState({drawerContent: content});
    this.setState({visible: true});
  };

  showDrawerBlue() {
    this.setState({visibleBlue: true});
  }

  onClose() {
    this.setState({visible: false});
    this.setState({visibleBlue: false});
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    let drawerContent = this.state.drawerContent;
    let modalContent = this.state.modalContent;

    if(modalContent == "firstdeparture") {
      modalContent = <div><h2>Flight 1 Departure</h2> <p>Things don't always go according to plan. Flight delays are often inevitable, whether caused by inclement weather or an operational or technology issue.</p></div>;
     }
     else if(modalContent == "missed") {
       modalContent = <div><h2>Missed Connection</h2> <p>Delays push back the rest of the traveler's itinerary and can result in a missed connection. When a traveler needs to rebook, their options for changing their ticket vary depending on where the ticket was purchased.</p></div>;
     }
     else if (modalContent == "transportation") {
       modalContent = <div><h2>Transportation from Airport</h2> <p>If the traveler arranged a ride from the airport to their destination, with hotel check-in at a certain time, their plans need to be adjusted. In the future, <strong>real-time data transmission</strong> will be valuable. If the traveler's arrival is delayed by four hours, the airline or agency could potentially relay status updates to the car company and the hotel, making them aware of the traveler’s delay. Status updates could also be delivered to corporate travel managers, enhancing duty of care.</p></div>;
     }
     else if(modalContent == "rebook") {
       modalContent = <div><h2>Rebook</h2> <p>If the traveler purchased their ticket through a travel agency or TMC, either that agency or the airline may make changes to the ticket. If they purchased through the airline, a travel agency or TMC is not able to service the ticket. Channel-agnostic service will enable TMCs to service all their clients’ airline tickets, regardless of the purchase channel. This will require efficient, real-time transmission of data. </p></div>;
     }


    if (drawerContent == "order") {
      drawerContent = <div>
        <div className="order">Perfect World</div>
        <p>In a perfect world, the trip goes smoothly and according to plan. The traveler arrives at their destination on time, with the products and services they purchased. In an evolved distribution environment, these steps will be even more intuitive and streamlined.
        </p>
        <div className="tableContainer">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Departure</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>;

    } else if (drawerContent == "payment") {
      drawerContent = <div>
        <div className="payment">Delays & Missed Connections</div>
        <p>Flight delays happen, and they can create a cascading effect on the rest of a trip, especially if there's a connecting flight.</p>
        <div className="tableContainer tableLong">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board First Flight</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>First Flight Departure</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'firstdeparture')} src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>First Flight Arrives</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img  src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Missed Connection</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'missed')} src="img/X.png"/></td>
                </tr>
                <tr>
                  <td>Rebook</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'rebook')} src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board New Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>New Flight Departs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>New Flight Arrives</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'transportation')} src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>
<p className="bottomP">Opening up customer service opportunities to agencies in a channel-agnostic servicing environment alleviates strain for the airline, and it creates a more positive experience for the customer. Technologies like AI and mobile can also speed resolution.</p>
        </div>
      </div>
    } else if (drawerContent == "settlement") {
      drawerContent = <div>
        <div className="payment">Bundles & Corporate Policy</div>
        <p className="bundlesP">Purchasing bundles ahead of time can reduce friction on the day of travel. Corporate travel programs can reduce friction by creating flexible travel policies for frequent travelers. Amenities like in-flight wi-fi and TSA PreCheck can create a more seamless and more productive experience for business travelers.</p>
        <div className="tableContainer tableBundles">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Economy Plus</td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>TSA PreCheck</td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Priority Boarding</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>;
    }

    return (<div className="tripPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="textSlide GradientGreen">

          <div className="textSlideContent">
            The trip experience begins with mobile check-in 24 hours in advance and spans the traveler’s journey to and through the airport, as well as boarding, flight and transport to their destination.

          </div>
          <img src="img/allcopyTrip.png" alt=""/>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What if the traveler needs to make a last-minute change to their trip?</h2>
          <Todaytomorrow today={<div> Air travel is becoming more streamlined,
            but it is still fragmented in many ways.The customer expects an easy,
            seamless and customizable buying experience — yet making changes to a ticket can be challenging,
            and add - on purchases(checked bag, wi - fi, in - flight meal)are each made on a separate transaction.</div>} tomorrow={<div> Because personalized products have already been purchased at the point of sale,
            the traveler can enjoy a < strong > frictionless experience</strong>,
            which has been customized to their personal preferences.In a ONE Order environment,
            ancillary purchases will be connected to the traveler’s order,
            so all their data will be centralized in one location.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="customTripSlide">
          <h1>The Day of Travel</h1>
          <p>With dozens of touch points on the day of travel, brands have an opportunity to create a more seamless experience for their travelers.</p>
          <div className="stepOrderContainer">
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'order')}>
              <strong>In a Perfect World</strong>
              <img src="img/1.png" alt=""/>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'payment')}>
              <strong>Delays & Missed Connections</strong>
              <img src="img/2.png" alt=""/>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'settlement')}>
              <strong>Bundles & Corporate Policy</strong>
              <img src="img/3.png" alt=""/>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide tts2 big">
          <h2>What happens if the flight is cancelled or delayed, and there’s a missed connection?
          </h2>
          <Todaytomorrow today={<div> In cases of irregular operations(such as inclement weather, delays and cancellations),
            a traveler’s options for changing their ticket vary depending on where they purchased their ticket.If they purchased through a travel agency or TMC, either that agency or the airline may make changes to the ticket.If they purchased through the airline, a travel agency or TMC is not able to service the ticket.</div>} tomorrow={<div><strong> Channel - agnostic service</strong> will enable TMCs to service all their clients’ airline tickets,
            regardless of the purchase channel.This will require efficient,
            real - time transmission of data.Opening up customer service opportunities to agencies in a channel - agnostic servicing environment alleviates strain for the airline, and it creates a more positive experience for the customer.Leveraging technologies like AI and mobile can also help speed resolution.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="blueSlide">
          <h2>In the future, corporate travel programs can work with their TMCs and OBTs to create in-policy bundles for road warriors. ARC’s Road Warrior research identifies which policy changes can contribute to more productivity, retention and wellness.
          </h2>
          <div className="blueContainer">
            See what road warriors identified as their top priorities.
            <button onClick={this.showDrawerBlue}>Tap to View</button>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>Fast forward. The traveler has happily made it to their destination.
            <br/><br/>After enjoying their trip, the traveler ventures back home. (But the journey’s not over yet!)
          </h2>
          <Link to={{
              pathname: '/',
              anchor: 'outcome'
            }}>
            <button className="animated pulse slower infinite">Next Step: Outcome</button>
          </Link>
        </div>
      </Pageslide>
      <Drawer className="purchaseDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>

      <Drawer className="blueDrawer blueDrawerTrip" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visibleBlue}>
        <div className="infoDrawer">
          <h2>Maximizing Trip Success, Retention and Wellness</h2>

          <div className="blueList">
            <strong>Prioritize for:</strong><br/>
            <ul>
              <li>Better Sleep</li>
              <li>Reducing personal travel time</li>
              <li>Allowing non-stops and better cabin policies</li>
              <li>Promoting healthier diets, more exercise</li>
              <li>Choosing better hotels</li>
              <li>Contracting with more punctual airlines</li>
            </ul>
          </div>

          <div className="blueList">
            <strong>Reimburse for:</strong> <br/>
          <ul>
            <li>Faster airport security lines (e.g., TSA PreCheck, Clear)</li>
            <li>Priority boarding</li>
            <li>Preferred seats</li>
            <li>Wi-fi</li>
            <li>Airport lounge access</li>
            <li>Gyms, exercise classes</li>
          </ul>
          </div>

          <p>Source: “Traveler Friction: Insights from U.S. Road Warriors,” 2016 ARC, American Express GBT and tClara” </p>

          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>

      <Modal
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered
          width="800px"
        >
          {modalContent}
        </Modal>
    </div>);
  }
}

export default Trip;
