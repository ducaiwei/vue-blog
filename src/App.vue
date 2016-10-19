<template>
  <div id="app">
    <top></top>
  </div>
</template>

<script>
import Top from './components/Top'

export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
