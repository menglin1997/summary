import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import Json from './Json' //测试用数据
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
