import React, {Component} from "react";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {version, Button, Drawer} from "antd";
import {hot} from "react-hot-loader";
import Samplepage from './pages/Samplepage.jsx';
import Startpage from './pages/Startpage.jsx';

//navigation
import Navigation from './pages/Navigation.jsx';

//pages
import Inspire from './pages/Inspire.jsx';
import Shop from './pages/Shop.jsx';
import Offer from './pages/Offer.jsx';
import Purchase from './pages/Purchase.jsx';
import Pretrip from './pages/Pretrip.jsx';
import Trip from './pages/Trip.jsx';
import Outcome from './pages/Outcome.jsx';

class App extends Component {
  render() {
    return (<div>
      <Router>
        <div>
          <Route path="/" exact="exact" component={Navigation}/>
          <Route path="/navigation" exact="exact" component={Navigation}/>
          <Route path="/about/" component={Samplepage}/>
          <Route path="/inspire/" component={Inspire}/>
          <Route path="/shop/" component={Shop}/>
          <Route path="/offer/" component={Offer}/>
          <Route path="/purchase/" component={Purchase}/>
          <Route path="/pretrip/" component={Pretrip}/>
          <Route path="/trip/" component={Trip}/>
          <Route path="/outcome/" component={Outcome}/>
        </div>
      </Router>
    </div>)
  }
}

export default hot(module)(App);
