exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.StatusBar === 'undefined') {
      return cb(false)
    }
    Vue.cordova.StatusBar = window.StatusBar
    return cb(true)
  }, false)
}
