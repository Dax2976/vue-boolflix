import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass,faArrowRight,faArrowDown} from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faMagnifyingGlass,faArrowRight,faArrowDown)

Vue.config.productionTip = false

const bootstrap = require('bootstrap')

Vue.use(bootstrap)

new Vue({
  render: h => h(App),
}).$mount('#app')
