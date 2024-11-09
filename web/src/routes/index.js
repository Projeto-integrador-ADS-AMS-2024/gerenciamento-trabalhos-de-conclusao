import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// Rotas do sistema
const routes = [
  { path: '/', /*meta: { requiresAuth: false },*/ component: Home },// Rotas inicial (HOME->usuarios)

  // Login
  {
    path: '/login',
    meta: { 
      hideDefaultComponents: true, // Não mostrar o <RoterView> do App.vue
      requiresAuth: false 
    },
    component: () => import('../views/LoginView.vue')
  },

  // Rotas de usuarios
  { path: '/cadastrarUsuarios', /*meta: { requiresAuth: false },*/ component: () => import('../views/usuarios/CadastrarUsuarios.vue') },
  { path: '/visualizarUsuarios', /*meta: { requiresAuth: false },*/ component: () => import('../views/usuarios/VisualizarUsuarios.vue') },
  { path: '/importarUsuarios', /*meta: { requiresAuth: false },*/ component: () => import('../views/usuarios/ImportarUsuarios.vue') },
  { path: '/editarUsuario', /*meta: { requiresAuth: false },*/ component: () => import('../views/usuarios/EditarUsuarios.vue') },
  
  // Rotas de cursos
  { path: '/cursos', /*meta: { requiresAuth: false },*/ component: () => import('../views/cursos/Cursos.vue') },
  { path: '/cadastrarCursos', /*meta: { requiresAuth: false },*/ component: () => import('../views/cursos/CadastrarCursos.vue') },
  { path: '/visualizarCursos', /*meta: { requiresAuth: false },*/ component: () => import('../views/cursos/VisualizarCursos.vue') },
  { path: '/editarCurso', /*meta: { requiresAuth: false },*/ component: () => import('../views/cursos/EditarCursos.vue') },
  
  // Rotas de turmas
  { path: '/turmas', /*meta: { requiresAuth: false },*/ component: () => import('../views/turmas/Turmas.vue') },
  { path: '/cadastrarTurmas', /*meta: { requiresAuth: false },*/ component: () => import('../views/turmas/CadastrarTurmas.vue') },
  { path: '/visualizarTurmas', /*meta: { requiresAuth: false },*/ component: () => import('../views/turmas/VisualizarTurmas.vue') },
  { path: '/editarTurma', /*meta: { requiresAuth: false },*/ component: () => import('../views/turmas/EditarTurmas.vue') },

  // Rotas de disciplinas
  { path: '/disciplinas', /*meta: { requiresAuth: false },*/ component: () => import('../views/disciplinas/Disciplinas.vue') },
  { path: '/cadastrarDisciplinas', /*meta: { requiresAuth: false },*/ component: () => import('../views/disciplinas/CadastrarDisciplinas.vue') },
  { path: '/visualizarDisciplinas', /*meta: { requiresAuth: false },*/ component: () => import('../views/disciplinas/VisualizarDisciplinas.vue') },
  { path: '/editarDisciplina', /*meta: { requiresAuth: false },*/ component: () => import('../views/disciplinas/EditarDisciplinas.vue') },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const isAuth = localStorage.getItem('token');

  if (to.meta.requiresAuth && !isAuth && to.name !== 'login') {
    return {
      path: '/login',

      query: {
        redirect: to.fullPath
      }
    }
  }
});

// Exportando router
export default router;