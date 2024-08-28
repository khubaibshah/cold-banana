import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '/node_modules/primeflex/primeflex.css'
// import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

import App from './App.vue'
import router from './router'

import Button from 'primevue/button'

import 'primeicons/primeicons.css'
import Ripple from 'primevue/ripple'
const app = createApp(App)
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Lara,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    }
  }
})
app.directive('ripple', Ripple)
app.component('PrimeButton', Button)

app.use(createPinia())
app.use(router)

app.mount('#app')
