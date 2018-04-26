<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      <a href="./first.html?name=lee&age=28">first</a>
      <a href="./second.html">second</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
