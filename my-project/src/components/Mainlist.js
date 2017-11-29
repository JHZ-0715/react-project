import React, { Component } from 'react';
import axios from 'axios'

class Mainlist extends Component {
  constructor(){
    super();
    this.state = {
      showlist: []
    }
  }

    

  componentDidMount(){
    var that = this;
    axios.get("showapi/mobile/pub/site/1002/hot_show?&offset=0&length=10&src=weixin&time=1511932018331")
    .then(function(res){
      console.log(res);
      that.setState({
        showlist:res.data.result.data
      })
    })
  }
 render(){
    var list = this.state.showlist.map((item,index)=>{

    return(
       <div key={index} className="main33">
         <div className="m1">
           <img src={item.posterURL} />
         </div>
         <div className="m2">
           <h2 className="m21">{item.showName}</h2>
           <p className="m22">{item.latestShowTime}</p>
           <p className="m23">{item.venueName}</p>
           <div className="m24">
             <p className="mp1"><span>{item.showStatus.displayName}</span></p>
             <p className="mp2"><span>{item.minPrice}</span>元起</p>
           </div>
         </div>
       </div>
     
      );
    })


    return(
            
          <div className="main3">
            
              {list}
            
          </div>
      )


  }
}

export default Mainlist;