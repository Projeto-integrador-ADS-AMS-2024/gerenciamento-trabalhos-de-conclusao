const adminRouteDefaultData = {
    requiresAuth: true,
    acceptUserType: ['Admin']
};

export default [
    { path: '/admin/cadastrarUsuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/CadastrarUsuarios.vue') },
    { path: '/admin/usuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/Usuarios.vue') },
    { path: '/admin/importarUsuarios', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/ImportarUsuarios.vue') },
    { path: '/editarUsuario', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/usuarios/EditarUsuarios.vue') },
    
    // Cursos
    { path: '/admin/cursos', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/Cursos.vue') },
    { path: '/admin/cadastrarCursos', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/CadastrarCursos.vue') },
    { path: '/admin/editarCurso', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/cursos/EditarCursos.vue') },
    
    // Turmas
    { path: '/admin/cadastrarTurmas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/CadastrarTurmas.vue') },
    { path: '/admin/editarTurma', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/EditarTurmas.vue') },
    { path: '/admin/turmas/:id',  props: true, meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/turmas/turmaEspecifica.vue') },

    // Disciplinas
    { path: '/admin/disciplinas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/Disciplinas.vue') },
    { path: '/admin/cadastrarDisciplinas', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/CadastrarDisciplinas.vue') },
    { path: '/admin/editarDisciplina', meta: { ...adminRouteDefaultData }, component: () => import('../views/admin/disciplinas/EditarDisciplinas.vue') },
]