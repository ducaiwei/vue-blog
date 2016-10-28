import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ChatRoom from './ChatRoom'
import Chat from './components/Chat'
import Topics from './components/Topics'
import './assets/css/normalize.css'
/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	{
		path: '',
		component: Topics
	},
	{
		path: '/chatroom',
		component: ChatRoom
	},
	{
		path: '/chatroom',
		component: ChatRoom
	}
	]
});
new Vue({
	router: router,
  	render: h => h(App)
}).$mount('#app')
