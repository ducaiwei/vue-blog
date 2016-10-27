<template>
    <ul class="bottom-ul">
      <li :class="{'on':item.isOn}" v-for="item in items">
        <router-link :to="item.linkTo">{{ item.msg }}</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
      items: [
        { msg: '首页' , isOn:true , linkTo:'/'},
        { msg: '唠嗑' , isOn:false , linkTo:'/chat' },
        { msg: '分享' , isOn:false , linkTo:'/share' },
        { msg: '我的' , isOn:false , linkTo:'/my' }
      ]
    }
  }
}
</script>
<style>
  .bottom-ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin:0;
    width:100%;
    background-color:#F5FFFA;
    list-style:none;
  }
  .bottom-ul li{
    display: block;
    position:relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color:#888;
    line-height:40px;
    font-size:12px;
  }
  .bottom-ul li.on{
    color:red;
  }
</style>