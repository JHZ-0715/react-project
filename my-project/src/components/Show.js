import React, { Component } from 'react';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class Show extends Component {

  constructor(){
    super();
    this.state = {
      showw: []
    }
  }

    

  componentDidMount(){
    var that = this;
    axios.get("/prodapi/mobile/pub/site/1002/active_show?offset=0&length=10&src=m_web&sorting=weight&seq=desc&client=piaodashi_weixin&time=1511958124899&locationCityOID=2102")
    .then(function(res){
      console.log(res);
      that.setState({
        showw:res.data.result.data
      })
    })
  }
 render(){
    // console.log(this.state.showw)
    var list = this.state.showw.map((item,index)=>{

    return(
       <div key={index} className="show4">
       <NavLink activeClassName="active" to={"/Detail/" + item.showOID}>
         <div className="m1">
            <img src={item.posterURL} />
         </div>
         <div className="m2">
             <h2 className="m21" style={{ overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "2"}}>{item.showName}</h2>
             <p className="m22">{item.latestShowTime}</p>
             <p className="m23">{item.venueName}</p>
             <div className="m24">
                 <p className="mp1"><span>{item.showStatus.displayName}</span></p>
                 <p className="mp2"><span>{item.minPrice}</span>元起</p>
             </div>
         </div>
         </NavLink>
       </div>
     
      );
    })


    return(
      <div>

          <div className="show1">
              <p className="p1">北京&nbsp;&nbsp;∨</p>
              <div className="p2"><img src={require("../images/fdj.png")} />搜索明星、演出、场馆</div>
          </div>

          <div className="show2">
              <ul>
                  <li style={{color:"#f60",borderBottom:"1px solid #f60"}}>全部</li>
                  <li>演唱会</li>
                  <li>话剧歌剧</li>
                  <li>体育赛事</li>
                  <li>音乐会</li>
                  <li>儿童亲子</li>
                  <li>舞蹈芭蕾</li>
                  <li>展览休闲</li>
                  <li>曲艺杂谈</li>
              </ul>
          </div>
          <div className="show3">
            <p style={{borderRight:"1px solid #aaa"}}>按热度&nbsp;&nbsp;∨</p>
            <p>全部时间&nbsp;&nbsp;∨</p>
          </div>

          <div className="main3">
              {list}
          </div>

      </div>
      )


  }
}

export default Show;