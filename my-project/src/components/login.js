//该组件是登录页
import React, {Component} from 'react';
import '../css/login.css';
import axios from 'axios';
import {createBrowserHistory} from 'history';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'
class Login extends Component {
	constructor() {
    super();
    this.login = this.login.bind(this);
    }
    login() {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
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
                    history.push('/Home')//登录成功刷新界面
                    alert('登录成功');
                })
            }

  render() {
    return (
    <div className="box">
    	    	<p><NavLink activeClassName="active" className="return" to="/Home"></NavLink>登录</p>
    	<div className="logo">
    		<img src={require("../images/login-logo.0cd98347.png")}/>
    	</div>
    	<div className="ipt1">
    		<input type="text" id='username' placeholder="请输入用户名" autoComplete="off" />
    	</div>
    	<div className="ipt2">
    		<input type="password" id='psw' placeholder="请输入密码" />
    	</div>
        <span><NavLink activeClassName="active" className="zc" to="/regist">快速注册</NavLink></span>
    	<button onClick={() => this.login()}>登录</button>
    	<div className="txt"><NavLink activeClassName="active" to="/Order">* 未注册过的帐号将自动创建摩天轮账号</NavLink></div>
    </div>
    )
  }
}

export default Login;
