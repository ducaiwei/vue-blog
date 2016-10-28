<template>
  <transition name="slideRight" mode="">
    <div>
      <div class="chat-top">
      	<img src="/static/chat-top.jpg" class="chat-top-img"/>
      	<div>
      		<p class="chat-name-title">取个名号</p>
          <div>
            <input type="text" class="input" name="userName" id="user_name" placeholder="输入名号"/>
          </div>
          <div>
              <a class="login-btn" @click="login">登录</a>
          </div>
      	</div>
      </div>
      <div>
      </div>
    </div>
  </transition>
</template>
<style>
  .input{
    display:block;
    margin:auto;
    height:40px;
    line-height:40px;
    border-radius:10px;
    border:qpx solid #888;
    -webkit-appearance:none;
  }
  .login-btn{
      background-color: #3CAF36;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 40px;
      margin: 10px auto;
      color: #fff;
      font-weight: bolder;
  }
	.chat-top-img{
		width:100%;
		max-height:190px;
	}
	.chat-name-title{
		font-size:18px;
		text-align:center;
		line-height:50px;
	}
</style>
<script>
import { Client } from './js/chat-client.js'
export default {
  name: 'Chatroom',
  data () {
      return {}
  },
  methods: {
    login(){//登录事件
        const v = document.getElementById('user_name').value;
        if(!v){
          alert('请输入名号！');
          return;
        }
        Client.connect();
    }
  }
}
</script>
