<template>
  <div class="hello">
    <div>
      <h1 @click="getNavigator">获取naviator对象</h1>
      <h2 @click="getWindow">获取window对象</h2>
    </div>
    <div class="native">
      <h2>原生事件调用测试</h2>
      <button @click="testF">测试初始化数据</button>
      <button @click="getImageFromCamera">从相机获取图片</button>
      <button @click="getImageFromPicture">从图库获取图片</button>
    </div>
    <h3><a href="http://loadingmore.com">我的博客(外链测试)</a></h3>
    <ul class="native">
      <h2>设置状态栏颜色</h2>
      <li
        v-for="item in statusList"
        @click="getStatusBar(item)"
        :key="item"
        :style="{backgroundColor: item}">{{ item }}</li><br/>
    </ul>
    <div>
      <img :src="upload" alt="">
      <img :src="upload2" alt="">
    </div>
    <button @click="$router.push({name: 'back_page'})">跳转路由，测试键盘返回按钮事件</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      statusList: ['#62417c', '#60dce4', '#c33', '#333'],
      upload: '',
      upload2: ''
    }
  },
  methods: {
    getNavigator () {
      console.log(navigator)
    },
    getWindow () {
      console.log(window)
    },
    testF () {
      Vue.cordova.on('deviceready', () => {
        console.log('Cordova : device is ready !')
        alert(JSON.stringify(Vue.cordova))
      })
    },
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
    },
    getStatusBar (status) {
      if (!Vue.cordova.deviceready) {
        window.alert('当前非android原生环境，不支持该功能，请打包后测试')
        return
      }
      Vue.cordova.on('deviceready', () => {
        console.log(navigator)
        console.log(Vue.cordova)
        console.log(window)
        Vue.cordova.StatusBar.backgroundColorByHexString(status)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  margin-top: 60px;
}
img{
  display: inline-block;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  border: none;
  background-color: rgb(55, 171, 214);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.native{
  margin: 30px auto;
}
</style>
