<template>
  <transition name="slideRight" mode="">
    <div>
      <div class="chat-top">
      	<img src="/static/chat-top.jpg" class="chat-top-img"/>
      	<div>
      		<p class="chat-name-title"></p>
      	</div>
      </div>

      <div>

      </div>
    </div>
  </transition>
</template>
<style>
	.chat-top-img{
		width:100%;
		max-height:150px;
	}
	.chat-name-title{
		font-size:18px;
		text-align:center;
		line-height:50px;
	}
</style>
<script>
export default {
  name: 'Chatroom'
}
</script>
