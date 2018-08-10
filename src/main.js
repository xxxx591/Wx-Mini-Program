import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/submit/main','^pages/index/main',"pages/checkReport/main","pages/details/main"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: '知网查重',
      navigationBarBackgroundColor: '#393D49',
      navigationBarTextStyle: '#ffffff',
      enablePullDownRefresh: true,
    },
    tabBar:{
      "selectedColor":"#ff5722",
      "backgroundColor":"#393D49",
      "color":"#ffffff",
      list: [{
        "pagePath": "pages/index/main",
        "text": "首页"
      }, {
        "pagePath": "pages/checkReport/main",
        "text": "查看报告"
      }]
    }
  }
}