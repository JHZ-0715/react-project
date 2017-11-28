import React, { Component } from 'react';
import axios from 'axios'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      recentShows: []
    }
  }

    

  componentDidMount(){
    var that = this;
    axios.get("/prodapi/mobile/pub/site/1002/topMarketingShows?src=weixin&time=1511868073842")
    .then(function(res){
      console.log(res);
      that.setState({
        recentShows:res.data.result.data.recentShows
      })
    })
  }
 render(){
    var list = this.state.recentShows.map((item,index)=>{

    return(
       
      // <div key={index} className="main2">
            <dl key={index}>
                <dt>
                  <img src={item.posterURL} />
                </dt>
                <dd className="dd1">
                  {item.showName}
                </dd>
                <dd className="dd2">
                  {item.latestShowTime}
                </dd>
            </dl>
      // </div>
     
      );
    })


    return(
            
          <div className="main2">
            {list}
          </div>
      )


  }
}

export default Main;