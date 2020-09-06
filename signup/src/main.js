import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;


// Overrite $http attribute with axios to use it globally
Vue.prototype.$http = axios;

// Create a $api property and assign the required domain name to it
Vue.prototype.$api = 'https://reqres.in/';



// Render App.vue in place of div#app in index.html (this file is present in ../public/index.html)
new Vue({
  render: h => h(App),
}).$mount('#app');
