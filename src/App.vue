<template>
  <div id="app">
    <Top></Top>
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
    position:absolute;
    width:100%;
    height:40px;
    bottom:0;
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
</style>
