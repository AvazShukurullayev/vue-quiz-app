import {createApp} from 'vue'
import App from './App.vue'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare, faTrash, faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faPenToSquare, faTrash, faEye);

import router from './router'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
