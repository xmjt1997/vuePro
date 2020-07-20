import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js'
import store from '@/plugins/vuex.js'
import '@/assets/css/base.css'
import '@/assets/js/base.js'

// import Vant from 'vant'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);



// Vue.use(Vant)


Vue.config.productionTip = false



Vue.filter('reglogin', (value) => {

	let txtcont = "";
	if (value == 0) {
		txtcont = '登录界面'
	} else {
		txtcont = '注册界面'
	}
	return txtcont;
})


new Vue({

	data() {
		return {
			addCount: true,
			showH: true,
			showF: true,
			newId: '',
			state: '',
			cut: false
		}
	},
	store,
	router,
	render: h => h(App)
}).$mount('#app')
