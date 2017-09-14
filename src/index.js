import Vue from 'vue';
import VueResource from 'vue-resource';

// Components
import TestComponent from './js/components/test-component.vue';

Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    message: "Hello Vue"
  },
  components: {
    'test-component': TestComponent
  }
})
