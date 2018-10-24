// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
import {fetch, post, put} from './api/https'

//定义全局变量
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;
Vue.prototype.$put = put;

Vue.use(VueI18n);
Vue.use(ElementUI);

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
/**引入css文件**/

import './assets/css/base.css';

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  // 语言标识
  messages: {
    'zh': require('./i18n/langs/zhCHS'),
    'en': require('./i18n/langs/en')
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: {App},
  template: '<App/>'
});
