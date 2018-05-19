// list here all supported plugins
const pluginsList = [
  'cordova-plugin-camera',
  'cordova-plugin-device',
  'cordova-plugin-statusbar'
]

exports.install = (Vue, options) => {
  // declare global Vue.cordova object 声明全局变量 Vue.cordova
  Vue.cordova = Vue.cordova || {
    deviceready: false,
    plugins: []
  }

  // Cordova events wrapper 设备已准备好
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = require('./plugins/' + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })
}
