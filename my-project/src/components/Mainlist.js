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
       <div key={index}>
         <div>
           <img src={item.posterURL} />
         </div>
         <div>
           <h2>qweqqweqwewe</h2>
           <p>qweqqwee</p>
           <p>qweqqwe</p>
           <div>
             <p>qwe</p>
             <p>qweqwe</p>
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