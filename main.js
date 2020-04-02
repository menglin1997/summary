import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import Json from './Json' //测试用数据

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
// 提示
Vue.prototype.toast=(message,show)=>{
    //#ifdef APP-PLUS
    plus.nativeUI.toast(message);
    // #endif
    //#ifndef APP-PLUS
    uni.showToast({
      title:message,
      duration: 2000,
      icon:show?'success':'none'
    });
    // #endif
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
Vue.prototype.$api = {msg, json, prePage};
const app = new Vue({
    ...App
})
app.$mount()
