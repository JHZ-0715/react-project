import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login'
import Main from './components/Main';
import Home from './components/Home';
import Show from './components/Show';
import Regist from './components/regist';
import './App.css';
import './css/antd.css';
import './css/app.css';
import axios from 'axios'
import { Carousel } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();

  }

  render(){


    return(
          <Router>
            <div>
              <ul className="footer">
                <li>
                  <NavLink activeClassName="active" to="/home">
                    <span className="icon1"></span>
                    <p className="active">精选</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/Show">
                    <span className="icon2"></span>
                    <p>演出</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/login">
                    <span className="icon3"></span>
                    <p>我的</p>
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Show" component={Show}/>
                <Route path="/Regist" component={Regist}/>
              </Switch>
            </div>
          </Router>
      )
  }
}

export default App;