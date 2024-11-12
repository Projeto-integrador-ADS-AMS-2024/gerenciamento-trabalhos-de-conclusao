<script setup>
import AdminHome from './admin/AdminHome.vue';
</script>

<template>
    <!-- Renderização condicional dependendo do papel do usuário -->
    <AdminHome v-if="$route.meta.userInfo.role === 'Admin'" />
</template>

<style >
    
</style>