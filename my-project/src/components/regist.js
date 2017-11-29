//该组件是注册页
import React, {Component} from 'react';
import '../css/regist.css';
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

class Regist extends Component {
	constructor() {
    super();
    this.regist = this.regist.bind(this);
    }
    regist() {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })

        if(document.querySelector('#psw').value !== document.querySelector('#pswagain').value){
            alert('两次输入的密码不一致');
            return;
        }
        axios.post('/users/regist', {
            username: document.querySelector('#username').value,
            psw: document.querySelector('#psw').value
        })
            .then((res) => {
                if (res.data.code !== 1) {
                    alert(res.data);
                    return;
                }
                history.push('/login')//注册成功跳转到登录页
                alert('注册成功')
            })
            }

  render() {
    return (
    <div className="box">
    	    <p><NavLink activeClassName="active" className="return" to="/login"></NavLink>注册</p>
    	<div className="logo">
    		<img src={require("../images/login-logo.0cd98347.png")}/>
    	</div>
    	<div className="ipt1">
    		<input type="text" id='username' placeholder="请输入账户名" autoComplete="off" />
    	</div>
    	<div className="ipt2">
    		<input type="password" id='psw' placeholder="请输入密码" />
    	</div>
        <div className="ipt2">
            <input type="password" id='pswagain' placeholder="请确认密码" />
        </div>
    	<button onClick={() => this.regist()}>注册</button>
    </div>
    )
  }
}

export default Regist;
