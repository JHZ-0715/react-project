import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login'
import Main from './components/Main';
import Home from './components/Home';
import Show from './components/Show';
import Regist from './components/regist';
<<<<<<< HEAD
import Order from './components/Order';
import Price from './components/Price';
=======
import Detail from './components/Detail';
>>>>>>> d3112a43354bf0e3e43596d8396096dc74c2f4e1
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
<<<<<<< HEAD
                <Route path="/Order" component={Order}/>
                <Route path="/Price" component={Price}/>
=======
                <Route path="/Detail/:sid" component={Detail}/>
>>>>>>> d3112a43354bf0e3e43596d8396096dc74c2f4e1
              </Switch>
            </div>
          </Router>
      )
  }
}

export default App;