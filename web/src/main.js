import { createApp } from 'vue'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import App from './App.vue'
import router from './routes'


const vuetify = createVuetify({
  components,
  directives,
})


// Cria uma nova instância do aplicativo Vue com o componente raiz `App`
createApp(App)
  // Registra o roteador da aplicação para gerenciar as rotas
  .use(router)
  .use(vuetify)
  // Monta a aplicação no elemento HTML com o ID 'app'
  .mount('#app');
