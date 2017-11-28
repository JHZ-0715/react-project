import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/antd.css';
import axios from 'axios'
import { Carousel } from 'antd';

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
    var list = this.state.shows.map((item,index)=>{

    return(
       
      <div key={index}>
         <img src = {item.posterUrl} />
      </div>
     
      );
    })


    return(
      <div>
      <Carousel autoplay>
        {list}
      </Carousel>
      </div>
      )
  }
}

export default App;