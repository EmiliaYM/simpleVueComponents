import Vue from 'vue'
import App from './App.vue'

//a mechanism to transfer events between components
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
