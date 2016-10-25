<template>
    <ul class="bottom-ul">
      <li v-for="item in items">
        {{ item.msg }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
      items: [
        { msg: '首页' },
        { msg: '精华' },
        { msg: '分享' },
        { msg: '我的' }
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
</style>