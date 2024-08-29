import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'

// import { installComponents } from './components-wrapped/install'

// import 'primeflex/themes/primeone-dark.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
import StyleClass from 'primevue/styleclass'
import App from './App.vue'
import router from './router'

import Button from 'primevue/button'

import 'primeicons/primeicons.css'
// import Ripple from 'primevue/ripple'
const app = createApp(App)
app.use(
  PrimeVue,
  { ripple: true },
  {
    // Default theme configuration
    theme: {
      preset: Lara,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    }
  }
)
// app.directive('ripple', Ripple)
app.component('AppButton', Button)
app.directive('styleclass', StyleClass)
app.use(createPinia())
app.use(router)

// installComponents(app)
app.mount('#app')
