import React, { Component } from 'react';
import '../css/antd.css';
import Main from '../components/Main';
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

class Home extends Component {
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
       
      <div key={index} className="header">
         <img src = {item.posterUrl}/>
      </div>
     
      );
    })


    return(

            <div>
          <Carousel autoplay>
            {list}
          </Carousel>
          <div className="banner">
          <dl>
            <dt className="b1"></dt>
            <dd>演唱会</dd>
          </dl>
          <dl>
            <dt className="b2"></dt>
            <dd>话剧歌剧</dd>
          </dl>
          <dl>
            <dt className="b3"></dt>
            <dd>音乐会</dd>
          </dl>
          <dl>
            <dt className="b4"></dt>
            <dd>体育赛事</dd>
          </dl>
          <dl>
            <dt className="b5"></dt>
            <dd>更多</dd>
          </dl>
          </div>{/*banner*/}

          <div className="main">
            <p>近期热门&nbsp;&nbsp;&nbsp;&nbsp;></p>
          </div>
         
          <Main></Main>


            </div>


      )


  }
}

export default Home;