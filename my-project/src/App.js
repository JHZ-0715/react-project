import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login'
import './App.css';
import './css/antd.css';
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
    this.state = {
      shows: []
    }
  }

    

  componentDidMount(){
    var that = this;
    axios.get("/prodapi/pub/site/1002/banner/app?bannerCategory=&time=1511835238807")
    .then(function(res){
      console.log(res);
      that.setState({
        shows:res.data.result.data
      })
    })
  }
  render(){
    // var list = this.state.shows.map((item,index)=>{

    // return(
       
    //   <div key={index}>
    //      <img src = {item.posterUrl} />
    //   </div>
     
    //   );
    // })
    return(
          <Router>
            <div>
              <ul>
                <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
              </ul>

              <hr/>
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Login}/>
                
              </Switch>
            </div>
          </Router>

      )


  }
}

export default App;