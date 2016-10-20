<template>
    <ul class="bottom-ul">
      <li v-for="item in items">
        {{ item.msg }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Top',
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
    width:100%;
    list-style:none;
  }
  .bottom-ul li{
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 7px 0 0;
    color:#888;
    line-height:40px;
    font-size:12px;
  }
</style>