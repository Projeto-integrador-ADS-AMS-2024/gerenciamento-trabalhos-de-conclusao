import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const adminRouteDefaultData = {
  requiresAuth: true,
  acceptUserType: ['admin']
};

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
};

// Rotas do sistema
const routes = [
  { 
    path: '/', 
    name: 'home',
    meta: { requiresAuth: true }, 
    component: Home,
  },

  // Login
  {
    path: '/login',
    name: 'login',
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
  { path: '/admin/cadastrarUsuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/CadastrarUsuarios.vue') },
  { path: '/admin/visualizarUsuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/VisualizarUsuarios.vue') },
  { path: '/admin/importarUsuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/ImportarUsuarios.vue') },
  { path: '/editarUsuario', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/EditarUsuarios.vue') },
  
  // Cursos
  { path: '/admin/cursos', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/Cursos.vue') },
  { path: '/admin/cadastrarCursos', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/CadastrarCursos.vue') },
  { path: '/admin/visualizarCursos', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/VisualizarCursos.vue') },
  { path: '/admin/editarCurso', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/EditarCursos.vue') },
  
  // Turmas
  { path: '/admin/turmas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/Turmas.vue') },
  { path: '/admin/cadastrarTurmas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/CadastrarTurmas.vue') },
  { path: '/admin/visualizarTurmas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/VisualizarTurmas.vue') },
  { path: '/admin/editarTurma', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/EditarTurmas.vue') },

  // Disciplinas
  { path: '/admin/disciplinas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/Disciplinas.vue') },
  { path: '/admin/cadastrarDisciplinas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/CadastrarDisciplinas.vue') },
  { path: '/admin/visualizarDisciplinas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/VisualizarDisciplinas.vue') },
  { path: '/admin/editarDisciplina', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/EditarDisciplinas.vue') },
];

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
  
  if (to.name != 'home' && !to.meta.acceptUserType.includes(to.meta.userInfo.role)) {
    return {
      path: '/'
    }
  }
});

// Exportando router
export default router;