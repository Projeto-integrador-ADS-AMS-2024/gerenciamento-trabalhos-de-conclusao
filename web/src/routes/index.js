import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const isAuth = async () => {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch('http://localhost:3000/login', {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    
    const data = await res.json();

    return data.user;
  } catch(err) {
    console.log(err);
  }
}

// Rotas do sistema
const routes = [
  { 
    path: '/', 
    meta: { requiresAuth: true }, 
    component: Home,
  },

  // Login
  {
    path: '/login',
    meta: { 
      hideDefaultComponents: true, // Não mostrar o <RoterView> do App.vue
      requiresAuth: false 
    },
    beforeEnter: async () => {
      const user = await isAuth();
      if (user) {
        location.replace('/');
      }
    },
    component: () => import('../views/LoginView.vue')
  },

  // Rotas do Admin
  // Usuarios
  { path: '/cadastrarUsuarios', meta: { requiresAuth: true }, component: () => import('../views/admin/usuarios/CadastrarUsuarios.vue') },
  { path: '/visualizarUsuarios', meta: { requiresAuth: true }, component: () => import('../views/admin/usuarios/VisualizarUsuarios.vue') },
  { path: '/importarUsuarios', meta: { requiresAuth: true }, component: () => import('../views/admin/usuarios/ImportarUsuarios.vue') },
  { path: '/editarUsuario', meta: { requiresAuth: true }, component: () => import('../views/admin/usuarios/EditarUsuarios.vue') },
  
  // Cursos
  { path: '/cursos', meta: { requiresAuth: true }, component: () => import('../views/admin/cursos/Cursos.vue') },
  { path: '/cadastrarCursos', meta: { requiresAuth: true }, component: () => import('../views/admin/cursos/CadastrarCursos.vue') },
  { path: '/visualizarCursos', meta: { requiresAuth: true }, component: () => import('../views/admin/cursos/VisualizarCursos.vue') },
  { path: '/editarCurso', meta: { requiresAuth: true }, component: () => import('../views/admin/cursos/EditarCursos.vue') },
  
  // Turmas
  { path: '/turmas', meta: { requiresAuth: true }, component: () => import('../views/admin/turmas/Turmas.vue') },
  { path: '/cadastrarTurmas', meta: { requiresAuth: true }, component: () => import('../views/admin/turmas/CadastrarTurmas.vue') },
  { path: '/visualizarTurmas', meta: { requiresAuth: true }, component: () => import('../views/admin/turmas/VisualizarTurmas.vue') },
  { path: '/editarTurma', meta: { requiresAuth: true }, component: () => import('../views/admin/turmas/EditarTurmas.vue') },

  // Disciplinas
  { path: '/disciplinas', meta: { requiresAuth: true }, component: () => import('../views/admin/disciplinas/Disciplinas.vue') },
  { path: '/cadastrarDisciplinas', meta: { requiresAuth: true }, component: () => import('../views/admin/disciplinas/CadastrarDisciplinas.vue') },
  { path: '/visualizarDisciplinas', meta: { requiresAuth: true }, component: () => import('../views/admin/disciplinas/VisualizarDisciplinas.vue') },
  { path: '/editarDisciplina', meta: { requiresAuth: true }, component: () => import('../views/admin/disciplinas/EditarDisciplinas.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const user = await isAuth();

  if (to.meta.requiresAuth && !user && to.name !== 'login') {
    return {
      path: '/login',

      query: {
        redirect: to.fullPath
      }
    }
  } 

  to.meta.userInfo = user;
});

// Exportando router
export default router;