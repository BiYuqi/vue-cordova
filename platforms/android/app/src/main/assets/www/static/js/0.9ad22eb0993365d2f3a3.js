webpackJsonp([0],{"07PK":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(o("mvHQ")),n=r(o("7+uW"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"HelloWorld",data:function(){return{statusList:["#62417c","#60dce4","#c33","#333"],upload:"",upload2:""}},methods:{getNavigator:function(){console.log(navigator)},getWindow:function(){console.log(window)},testF:function(){n.default.cordova.on("deviceready",function(){console.log("Cordova : device is ready !"),alert((0,a.default)(n.default.cordova))})},getImageFromCamera:function(){var t=this;n.default.cordova.deviceready?n.default.cordova.camera.getPicture(function(e){window.alert("Photo URI : "+e),t.upload=e},function(t){window.alert("FAILED : "+t)},{quality:50,correctOrientation:!0,sourceType:1,destinationType:n.default.cordova.camera.DestinationType.FILE_URI}):window.alert("当前非android原生环境，不支持该功能，请打包后测试")},getImageFromPicture:function(){var t=this;n.default.cordova.deviceready?n.default.cordova.camera.getPicture(function(e){window.alert("Photo URI : "+e),t.upload2=e},function(t){window.alert("FAILED : "+t)},{quality:50,correctOrientation:!0,sourceType:0,destinationType:n.default.cordova.camera.DestinationType.FILE_URI}):window.alert("当前非android原生环境，不支持该功能，请打包后测试")},getStatusBar:function(t){n.default.cordova.deviceready?n.default.cordova.on("deviceready",function(){console.log(navigator),console.log(n.default.cordova),console.log(window),n.default.cordova.StatusBar.backgroundColorByHexString(t)}):window.alert("当前非android原生环境，不支持该功能，请打包后测试")}}}},"1pNr":function(t,e,o){"use strict";var a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("div",[o("h1",{on:{click:t.getNavigator}},[t._v("获取naviator对象")]),t._v(" "),o("h2",{on:{click:t.getWindow}},[t._v("获取window对象")])]),t._v(" "),o("div",{staticClass:"native"},[o("h2",[t._v("原生事件调用测试")]),t._v(" "),o("button",{on:{click:t.testF}},[t._v("测试初始化数据")]),t._v(" "),o("button",{on:{click:t.getImageFromCamera}},[t._v("从相机获取图片")]),t._v(" "),o("button",{on:{click:t.getImageFromPicture}},[t._v("从图库获取图片")])]),t._v(" "),t._m(0),t._v(" "),o("ul",{staticClass:"native"},[o("h2",[t._v("设置状态栏颜色")]),t._v(" "),t._l(t.statusList,function(e){return o("li",{key:e,style:{backgroundColor:e},on:{click:function(o){t.getStatusBar(e)}}},[t._v(t._s(e))])}),o("br")],2),t._v(" "),o("div",[o("img",{attrs:{src:t.upload,alt:""}}),t._v(" "),o("img",{attrs:{src:t.upload2,alt:""}})]),t._v(" "),o("button",{on:{click:function(e){t.$router.push({name:"back_page"})}}},[t._v("跳转路由，测试键盘返回按钮事件")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("a",{attrs:{href:"http://loadingmore.com"}},[this._v("我的博客(外链测试)")])])}]};e.a=a},diI9:function(t,e){},gORT:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("07PK"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);var i=o("1pNr");var c=function(t){o("diI9")},d=o("VU/8")(n.a,i.a,!1,c,"data-v-2675f8de",null);e.default=d.exports},mvHQ:function(t,e,o){t.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(t,e,o){var a=o("FeBl"),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=0.9ad22eb0993365d2f3a3.js.map