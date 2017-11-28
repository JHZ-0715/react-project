import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      films: []
    }
  }
  componentDidMount(){
    var that = this;
    axios.get("/v4/api/film/now-playing?__t=1511310189846&page=1&count=5")
    .then(function(res){
      console.log(res);
      that.setState({
        films:res.data.data.films
      })
    })
  }
  render(){
    var list = this.state.films.map((item,index)=>{

    return(
      <div>
        <img src = {item.cover.origin} />
        <h2>{item.name}</h2>
      </div>
      );
    })
    return(
      <div>
        {list}
      </div>
      )
  }
}

export default App;