import { LOGIN_PAGE_URL } from '../config.js'
export default class Router {

  noNeedLoginPages = []

  constructor(options){
    if(options) this.noNeedLoginPages = options.noNeedLoginPages
  }

  testingNeedLogin(url){
    return this.noNeedLoginPages.findIndex(item => item == url || url.startsWith(item)) == -1
  }

  getNoNeedLoginPages(){
    return this.noNeedLoginPages
  }

  switchTab(url){
    uni.switchTab({ url });
  }

  redirectTo(url){
    if(this.testingNeedLogin(url)){
      if(global.token){
        uni.redirectTo({ url });
      }else{
        uni.redirectTo({ url: LOGIN_PAGE_URL })
      }
      return
    }
    uni.redirectTo({ url });
  }

  reLaunch(url){
    uni.reLaunch({ url });
  }

  navigateBack(){
    uni.navigateBack();
  }

  navigateTo(url){
    if(this.testingNeedLogin(url)){
      if(global.token){
        uni.navigateTo({ url });
      }else{
        uni.navigateTo({ url: LOGIN_PAGE_URL })
      }
      return
    }
    uni.navigateTo({ url });
  }
}
