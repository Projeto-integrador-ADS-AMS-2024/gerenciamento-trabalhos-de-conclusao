import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import adminRoutes from './adminRoutes';

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
  ...adminRoutes

  // Rotas do Aluno

  // Rotas do professor
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

  // Route authorization
  console.log(to.meta)
  if (to.meta.acceptUserType) {

    if (to.name != 'home' && !to.meta.acceptUserType.includes(to.meta.userInfo.role)) {
      return {
        path: '/'
      }
    }
  }
  
});

// Exportando router
export default router;