import { createApp } from 'vue'
// import { router } from './router';
import * as bootstrap from 'bootstrap';
import './assets/scss/main.scss';
import App from './App.vue'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSteam } from '@fortawesome/free-brands-svg-icons'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
library.add(faTwitter, faFacebook, faHatWizard, faSteam)


createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)