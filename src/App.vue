<template>
  <div id="app">
    <Top></Top>
    <div id="bottom">
      <Bottom></Bottom>
    </div>
    <div class="container">
      <Topics></Topics>
    </div>
  </div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'
import Topics from './components/Topics'
export default {
  name: 'app',
  components: {
    'Top': Top,
    'Bottom': Bottom,
    'Topics': Topics
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
  .container{
    padding-bottom:40px;
  }
</style>
