import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'

library.add(faYoutube, faInstagram, faFacebook);
// fas,
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import router from "./router/router"


createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .use(VueAwesomePaginate)
  .mount('#app')