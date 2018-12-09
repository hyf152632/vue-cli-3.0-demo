import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/'

//插件的使用
//当然你也可以不使用 install 方法来编写插件，直接采用导出一个封装好的实例方法并将其挂载到 Vue 的原型链上来实现相同的功能。
// import Toast from "@/widgets/toast/toast.js";
// Vue.use(Toast); // 注册 Toast
// this.$toast("Hello World", 2000);  //使用

Vue.config.productionTip = false

Vue.prototype.$http = axios
//使用 performance 开启性能追踪
if (process.env.NODE_ENV !== 'production') {
    Vue.config.performance = true
}
//开启后我们可以下载 Vue Performance Devtool 这一 chrome 插件来看查看各个组件的加载情况

//移动端调试
//vConsole: https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
