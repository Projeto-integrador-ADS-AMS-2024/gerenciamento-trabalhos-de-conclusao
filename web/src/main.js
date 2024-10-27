import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'

// Cria uma nova instância do aplicativo Vue com o componente raiz `App`
createApp(App)
  // Registra o roteador da aplicação para gerenciar as rotas
  .use(router)
  // Monta a aplicação no elemento HTML com o ID 'app'
  .mount('#app');

