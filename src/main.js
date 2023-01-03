import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

// import vuetify from './plugins/vuetify'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})
// title



loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

