<script setup>
import AdminHome from './admin/AdminHome.vue';
import AlunoHome from './aluno/AlunoHome.vue';
</script>

<template>
    <!-- Renderização condicional dependendo do papel do usuário -->
    <AdminHome v-if="$route.meta.userInfo.role === 'Admin'" />
    <AlunoHome v-if="$route.meta.userInfo.role === 'Aluno'" />
</template>

<style >
    
</style>