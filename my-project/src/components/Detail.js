import React, { Component } from 'react';
import Detaillist from './Detaillist';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class Detail extends Component {
  constructor(){
    super();
    this.state = {
      detail: []
    }
  }


  componentDidMount(){
    var that = this;
    console.log(this.props.match.params.sid)
    var that = this;
    axios.get(`/showapi/pub/show/${this.props.match.params.sid}?client=piaodashi_weixin&src=m_web&time=1512005381027`)
    .then(function(res){
      console.log(res);
      console.log(typeof res.data.result.data.content)
      that.refs.con.innerHTML = res.data.result.data.content
      that.setState({
        detail:res.data.result.data
      })
    })

  }

 render(){

      var list = null
      if(this.state.detail.showStatus){
        list = this.state.detail.showStatus.displayName
      }
          console.log(this.state.detail.showOID)
          console.log(this.state.detail.minPrice)
    return(
      <div> 
        <div className="detail1">
            <div className="m1">
              <img src={this.state.detail.posterURL} />
            </div>
            <div className="m2">
                <h2 className="m21" style={{ overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "2"}}>{this.state.detail.showName}</h2>
                <p className="mp1"><span>{list}</span></p>
                <p className="mp2"><span>{this.state.detail.minPrice}</span>&nbsp;&nbsp;&nbsp;&nbsp;元起</p>
                <h1><NavLink activeClassName="active" to={"/Order/" + this.state.detail.showOID}>点击购买</NavLink></h1>

            </div>
            <img src={require("../images/tiaotiao.png")} className="img1"/>
        </div>

        <div className="detail2">
            <div className="de1">
                <div className="img1"><img src={require("../images/d1.png")} /></div>
                <p>新用户注册即送266元红包</p>
            </div>

            <div className="de2">
                <div className="img2"><img src={require("../images/d2.png")} /></div>
                <p>{this.state.detail.latestShowTime}</p>
            </div>

            <div className="de3">
                <div className="img3"><img src={require("../images/d3.png")} /></div>
                <p>{this.state.detail.venueName}</p>
            </div>

            <div className="de4">
                <div className="img4"></div>
                <p>{this.state.detail.venueAddress}</p>
            </div>

            <div className="de5">
              <div className="de51">
                <div className="img5"><img src={require("../images/d4.png")} /></div>
                <p>保证真票</p>
              </div>
              <div className="de51">
                <div className="img5"><img src={require("../images/d4.png")} /></div>
                <p>出票保障</p>
              </div>
              <div className="de51">
                <div className="img5"><img src={require("../images/d4.png")} /></div>
                <p>无忧配送</p>
              </div>
            </div>
            <div className="xuxian"></div>
            <div className="de6">
                <h2>演出介绍</h2>
                <div ref="con" className="de61"></div>  
            </div>
            <div className="de7">
              <h2>演出介绍</h2>
              <p>
                1、演出详情仅供参考，具体信息以主办方公布信息及现场为准，请准时到场以免错过演出。<br/>
                2、鉴于文体演出票品特殊性（具有时效性、唯一性等特征），一旦用户与卖家达成有效订单代表交易协议生效，用户不能主动要求取消交易（因演出活动被取消或延期除外）。<br/>
                3、鉴于票品的不可复制性与稀缺性，本平台对本演出（活动）限购数量为6张，平台有权无理由取消任何用户超过限购数量的交易，平台识别同一用户的方式包括但不限于同一注册手机。<br/>
                4、本平台尽最大努力促使卖家对交易协议的履行，如果卖家付票过程中发生问题，本平台可寻求其它卖家提供更高票面或相同票面更好位置票品代替，否则，平台将全额退款并按订单上约定的赔付方式与金额向用户进行赔付，详细规则请见《常见问题-无票赔付》 。
              </p>
            </div>
            <Detaillist></Detaillist>
        </div>
   
      </div>

      )


  }
}

export default Detail;