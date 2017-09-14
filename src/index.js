import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    message: "Hello Vue"
  }
})
