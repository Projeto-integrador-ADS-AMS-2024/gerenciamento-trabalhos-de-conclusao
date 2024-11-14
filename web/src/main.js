import { createApp } from 'vue'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import App from './App.vue'
import router from './routes'




// const vuetify = createVuetify({
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: {
//       mdi,
//     },
//   },
// }

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})


// Cria uma nova instância do aplicativo Vue com o componente raiz `App`
createApp(App)
  // Registra o roteador da aplicação para gerenciar as rotas
  .use(router)
  .use(vuetify)
  // Monta a aplicação no elemento HTML com o ID 'app'
  .mount('#app');
