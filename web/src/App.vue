<script setup>
  // Importação dos componentes presentes no layout padrao
  import { useRoute } from 'vue-router';

  import Aside from './components/menus/Aside.vue'
  import PluginAcessibility from './components/PluginAcessibility.vue'
  import NavbarMobile from './components/menus/NavbarMobile.vue';  
  const route = useRoute();
</script>

<template>
  <NavbarMobile v-if="!route.meta.hideDefaultComponents"/>
  <div class="container">
    <Aside v-if="!route.meta.hideDefaultComponents" /> <!-- Componente presente no layout padrao -->
    <PluginAcessibility  /> <!-- Componente presente no layout padrao -->
    
    <router-view/> <!-- Renderiza conteudo diferenciais das paginas -->
  </div>
</template>


<style scoped>
  .container{
    display: flex; 
  }
</style>
