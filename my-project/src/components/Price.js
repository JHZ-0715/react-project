//该组件是订单页
import React, {Component} from 'react';
import axios from 'axios'

class PriceUI extends Component {
	constructor() {
		super();
		this.state = {
     	 price: []
    	}
    	this.money = this.money.bind(this);
    	this.reduce = this.reduce.bind(this);

	}
	money(index){
		// console.log(index)
		// console.log(this.state.price[index].minPrice)
		document.querySelector('.moneyNow').innerHTML = this.state.price[index].minPrice
		document.querySelector('.moneyAll').innerHTML = this.state.price[index].minPrice

	}
	reduce(){
		var number = parseInt(document.querySelector('.num').innerHTML);
		number = --number;
		if (number < 0 ) {
			number = 0;
		}
		document.querySelector('.num').innerHTML= number;
		var price = document.querySelector('.moneyAll').innerHTML;
		document.querySelector('.moneyNow').innerHTML = price * number;

	}
	add(){
		var number = parseInt(document.querySelector('.num').innerHTML);
		number = ++number;
		document.querySelector('.num').innerHTML= number;
		var price = document.querySelector('.moneyAll').innerHTML;
		document.querySelector('.moneyNow').innerHTML = price * number;
	}
	componentDidMount(){
	console.log(this.props.match.params.ssid)
    var that = this;
    axios.get(`/showapi/pub/show/${this.props.match.params.ssid}/sessionone?src=m_web&time=1512025164992`)
    .then(function(res){
      console.log(res);
      that.setState({
        price:res.data.result.data[0].seatPlan
      })
    })
  }

	render() {
		var list = this.state.price.map((item,index)=>{
			return(
				<ul key={item.originalPrice}>
					<li onClick={()=>this.money(index)}>{item.originalPrice}票面</li>
				</ul>
			);
	  	})
		return(
			<div>
				<div className="big">{list}</div>
				<div className="number">
					<p>选择数量</p>
					<div className="reduce" onClick={()=>this.reduce()}><p>-</p></div>
					<div className="num">1</div>
					<div className="add" onClick={()=>this.add()}><p>+</p></div>
				</div>
				<div className="foot">
					<div className="total">
						<p className="p1">合计:</p>
						<div className="moneyNow"></div>
						<span>元</span>
						<div className="moneyAll"></div>
						<p className="p2">元/张</p>
					</div>
					<button>下一步</button>
				</div>	
			</div>
			

		)
	}
}

export default PriceUI;