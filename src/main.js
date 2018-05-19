import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from './cordova/cordova-plugins-index'

Vue.use(VueCordova)
Vue.config.productionTip = false
// 初始化加载
if (window.location.protocol === 'file:') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  cordovaScript.setAttribute('async', true)
  document.getElementsByTagName('head')[0].appendChild(cordovaScript)
}
/* eslint-disable no-new */
if (process.NODE_ENV === 'production') {
  document.addEventListener('deviceready', () => {
    new Vue({
      el: '#app',
      router,
      omponents: { App },
      template: '<App/>'
    })
  })
} else {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}
