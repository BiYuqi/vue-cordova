<template lang="html">
  <div class="test-page">
    <div>
      <img :src="upload" alt="">
      <img :src="upload2" alt="">
    </div>
    <h1>我是测试页面</h1>
    <button @click="$router.push({name: 'hello_world'})">回到首页</button>
    <div class="native">
      <button @click="getImageFromCamera">从相机获取图片</button>
      <button @click="getImageFromPicture">从图库获取图片</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      statusList: ['#62417c', '#60dce4', '#c33', '#333'],
      upload: '',
      upload2: ''
    }
  },
  methods: {
    getImageFromCamera () {
      if (!Vue.cordova.deviceready) {
        window.alert('当前非android原生环境，不支持该功能，请打包后测试')
        return
      }
      Vue.cordova.camera.getPicture((imageURI) => {
        window.alert('Photo URI : ' + imageURI)
        this.upload = imageURI
      }, (message) => {
        window.alert('FAILED : ' + message)
      }, {
        quality: 50,
        correctOrientation: true,
        sourceType: 1,
        destinationType: Vue.cordova.camera.DestinationType.FILE_URI
      })
    },
    getImageFromPicture () {
      if (!Vue.cordova.deviceready) {
        window.alert('当前非android原生环境，不支持该功能，请打包后测试')
        return
      }
      Vue.cordova.camera.getPicture((imageURI) => {
        window.alert('Photo URI : ' + imageURI)
        this.upload2 = imageURI
      }, (message) => {
        window.alert('FAILED : ' + message)
      }, {
        quality: 50,
        correctOrientation: true,
        sourceType: 0,
        destinationType: Vue.cordova.camera.DestinationType.FILE_URI
      })
    }
  }
}
</script>

<style lang="css">
.test-page{
  height: 100%;
  background-color: rgb(88, 204, 230);
}
button{
  padding: 5px 15px;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-bottom: 20px;
}
img{
  display: inline-block;
  width: 100%;
}
</style>
