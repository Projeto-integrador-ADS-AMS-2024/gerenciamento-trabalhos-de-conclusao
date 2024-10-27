import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'

// Rotas do sistema
const routes = [
  { path: '/', component: Home },// Rotas inicial (usuarios)

  // Rotas de usuarios
  { path: '/cadastrarUsuarios', component: () => import('../views/usuarios/CadastrarUsuarios.vue') },
  { path: '/visualizarUsuarios', component: () => import('../views/usuarios/VisualizarUsuarios.vue') },
  { path: '/importarUsuarios', component: () => import('../views/usuarios/ImportarUsuarios.vue') },
  
  // Rotas de cursos
  { path: '/cursos', component: () => import('../views/cursos/Cursos.vue') },
  { path: '/cadastrarCursos', component: () => import('../views/cursos/CadastrarCursos.vue') },
  { path: '/visualizarCursos', component: () => import('../views/cursos/VisualizarCursos.vue') },
  
  // Rotas de turmas
  { path: '/turmas', component: () => import('../views/turmas/Turmas.vue') },
  { path: '/cadastrarTurmas', component: () => import('../views/turmas/CadastrarTurmas.vue') },
  { path: '/visualizarTurmas', component: () => import('../views/turmas/VisualizarTurmas.vue') },

  // Rotas de disciplinas
  { path: '/disciplinas', component: () => import('../views/disciplinas/Disciplinas.vue') },
  { path: '/cadastrarDisciplinas', component: () => import('../views/disciplinas/CadastrarDisciplinas.vue') },
  { path: '/visualizarDisciplinas', component: () => import('../views/disciplinas/VisualizarDisciplinas.vue') },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Exportando router
export default router;