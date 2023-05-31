
import { createApp } from 'vue';
import './assets/scss/main.scss';
import * as bootstrap from 'bootstrap';

import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faSearch, faBookmark);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
