//该组件是订单页
import React, {Component} from 'react';
import Price from './Price';
import '../css/order.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class OrderUI extends Component {
	constructor() {
		super();
		this.state = {
     	 list: []
    }
	}
	componentDidMount(){
    var that = this;
    axios.get("/showapi/pub/show/59f9c37a6204e62c7ed9255f?client=piaodashi_weixin&src=m_web&time=1512002600298")
    .then(function(res){
      console.log(res);
      that.setState({
        list:res.data.result.data
      })
    })
  }

	render() {
		return(
		<div className="bigbox">
			<div className="header">
			<p><NavLink activeClassName="active" className="ret" to="/Home"></NavLink></p>
				<h2>{this.state.list.showName}</h2>
			</div>
			<div className="time">
				<ul>
					<li><a>{this.state.list.lastShowTime_weekday}</a></li>
				</ul>
			</div>
			<div className="pm">
				<div className="small"></div>
				票面
			</div>
			<Price></Price>
		</div>
		)
	}
}

export default OrderUI;