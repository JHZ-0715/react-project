import React, {Component} from 'react';
import '../css/login.css';
import axios from 'axios';

class Login extends Component {
	constructor() {
    super();
    this.login = this.login.bind(this);
  }
    login() {
        // console.log(document.querySelector('#username').value);
        // console.log(document.querySelector('#psw').value);
       axios.post('/users/login', {
                username: document.querySelector('#username').value,
                psw: document.querySelector('#psw').value
            })
                .then((res) => {
                    if (res.data.code !== 1) {
                        alert(res.data.message);
                        return;
                    }
                    document.cookie = 'user=' + document.querySelector('#username').value + ';path=/';
                    //history.push('/my/myhome')//登录成功刷新界面
                    alert('登录成功');
                })
        }

  render() {
    return (
    <div className="box">
    	<a></a>
    	<p>登录</p>
    	<div className="logo">
    		<img src={require("../images/login-logo.0cd98347.png")}/>
    	</div>
    	<div className="ipt1">
    		<input type="text" id='username' placeholder="请输入用户名" autoComplete="off" />
    	</div>
    	<div className="ipt2">
    		<input type="password" id='psw' placeholder="请输入密码" />
    	</div>
    	<button onClick={() => this.login()}>登录</button>
    	<div className="txt">* 未注册过的帐号将自动创建摩天轮账号</div>
    </div>
    )
  }
}

export default Login;
