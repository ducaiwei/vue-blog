<template>
	<div class="top">
    <div class="top-title">{{msg}}</div>
	</div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'vue-cnode'
    }
  }
}
</script>
<style>
  .top-title{
    position:fixed;
    top:0;
    z-index:999;
    width:100%;
    height:40px;
    line-height:40px;
    background-color:#35495e;
    color:#fff;
    font-size:20px;
    font-weight:800;
    text-align:center;
  }
  .top ul{
    display:block;
    list-style:none;
  }
</style>