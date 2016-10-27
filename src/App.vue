<template>
    
  <div id="app">
    <Top title="vue-demo"></Top>
        <router-view class="view"></router-view>
    <div id="bottom">
      <Bottom></Bottom>
    </div>
    
  </div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'
export default {
  name: 'app',
  components: {
    'Top': Top,
    'Bottom': Bottom
  }
}
</script>

<style>
  #app{
    height:100%;
    width:100%;
  }
  #bottom{
    position:fixed;
    width:100%;
    height:40px;
    bottom:0;
    z-index:9999;
  }
  #bottom:before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #979797;
    color: #979797;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .view{
    padding-top:40px;
    padding-bottom:40px;
  }
</style>
