import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '/node_modules/primeflex/primeflex.css'
// import 'primeflex/themes/primeone-light.css'

import { installComponents } from './components-wrapped/install'

// import 'primeflex/themes/primeone-dark.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
import StyleClass from 'primevue/styleclass'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import Ripple from 'primevue/ripple'
const app = createApp(App)
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Lara
  }
})
app.directive('styleclass', StyleClass)
app.directive('ripple', Ripple)
app.use(createPinia())
app.use(router)

installComponents(app)
app.mount('#app')
