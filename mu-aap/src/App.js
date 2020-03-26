import React from 'react';
import logo from './logo.svg';

import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import ManageEntries from './ManageEntries';
import MakeNewAdjustments from './MakeNewAdjustments';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: true,
        links: [
          {
            text: 'Home',
            link: '/Home',
            icon: 'asdjdsa'
          },
          {
          text: 'Dashboard',
          link: '/Dashboard',
          icon: 'ashdkjasd'
        }, {
          text: 'Manage Entries',
          link: '/ManageEntries',
          icon: 'asdads'
        },
        {
          text: 'Make New Adjustments',
          link: '/MakeNewAdjustments',
          icon: 'asdas'
        },
      ]
      }
       this.menuToggle = this.menuToggle.bind(this);

    }
 
    menuToggle(statestatus) {
       this.setState({
        isOpen: statestatus
      });
     }
    render() {
      return (
  
        <div>
          <Sidebar menuLinks={this.state.links} stateStatus={this.menuToggle} title={this.props.title}/>
          <div style={{marginLeft: this.state.isOpen?'250px':'10px'}}>
          <Router>
          <Switch>
          <Route exact path="/">
            <Home menuLinks={this.state.links}/>
          </Route>
          <Route exact path="/Home">
            <Home menuLinks={this.state.links}/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/ManageEntries">
            <ManageEntries/>
          </Route>
          <Route path="/MakeNewAdjustments">
            <MakeNewAdjustments/>
          </Route>
        </Switch>
    </Router>
    </div>
         </div>
      )
    }
  }

export default App;