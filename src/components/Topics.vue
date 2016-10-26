/**
*话题组件
**/
<template>
	<div class="topic-container">
		<div class="loading" v-if="topics.length == 0">
			小v正在努力加载中....
		</div>
		<ul>
			<li class="topic-li" v-for="topic in topics">
				<a href="">
					<img class="topic-author-img" :src="topic.author.avatar_url" />
					<div class="topic-title">{{ topic.title }}</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<style>
	.loading{
		font-size:14px;
		text-align:center;
	}
	.topic-container{
		display:block;
		width:100%;
		height:auto;
	}
	.topic-container ul{
		display:block;
		padding:0;
		list-style:none;
	}
	.topic-li{
		position:relative;
		list-style:none;
		width:100%;
		font-size:14px;
		min-height:40px;
		padding:5px 0;
	}
	.topic-li:after{
		content: " ";
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 1px;
	    border-top: 1px solid #979797;
	    color: #979797;
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
	.topic-li a{
		padding-left:10px;
		font-family:Helvetica,sans-serif;
		display:block;
		vertical-align:middle;
		text-decoration: none;
		color:#000
	}
	.topic-author-img{
		display:inline-block;
		width:25px;
		height:25px;
		border-radius:50%;
		vertical-align:middle;
	}
	.topic-title{
		display:inline-block;
	}
</style>
<script>
	import { Util } from './util';
	export default{
		name:'Topics',
		data () {
			return {
				topics:[]
			}
		},
		mounted: function () {
			let _this = this;
			Util.Ajax({
				url: 'http://localhost:8080/topics',
				data: {},
				type: 'GET',
				dataType: 'json',
				success: function (data) {
					if(data.success){//请求成功
						var d = data.data;
						_this.topics = d;
					}else{
						return {msg:data.success};
					}
				},
				error: function () {
				}  
			})
		}
	}
</script>