<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  created () {
    Vue.cordova.on('deviceready', () => {
      var exitAppTicker = 0
      console.log('deviceready')
      document.addEventListener('backbutton', function () {
        if (exitAppTicker === 0) {
          exitAppTicker++
          window.alert('再点一次退出')
          setTimeout(function () {
            exitAppTicker = 0
          }, 2000)
        } else if (exitAppTicker === 1) {
          navigator.app.exitApp() // 退出app
        } else {
          history.back()
        }
      }, false)
    })
  }
}
</script>

<style>
html, body{
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
