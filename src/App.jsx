import React, {Component} from "react";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {version, Button, Drawer} from "antd";
import {hot} from "react-hot-loader";
import Helloworld from './components/Helloworld.jsx';
import Samplepage from './pages/Samplepage.jsx';
import Startpage from './pages/Startpage.jsx';
import Navigation from './pages/Navigation.jsx';

class App extends Component {
  render() {
    return (<div>
      <Router>
        <div>
          <Route path="/" exact="exact" component={Navigation}/>
          <Route path="/about/" component={Samplepage}/>
        </div>
      </Router>
    </div>)
  }
}

export default hot(module)(App);
