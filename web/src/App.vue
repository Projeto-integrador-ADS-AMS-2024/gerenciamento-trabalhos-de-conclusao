<script setup>
  // Importação dos componentes presentes no layout padrao
  import Header from './components/Header.vue'
  import Aside from './components/Aside.vue'
  import PluginAcessibility from './components/PluginAcessibility.vue'
  import NavbarMobile from './components/NavBarMobile.vue';
  
</script>

<template>

  <Header /> <!-- Componente presente no layout padrao -->
  <NavbarMobile />
  <div class="container">
    <Aside /><!-- Componente presente no layout padrao -->
    <PluginAcessibility /><!-- Componente presente no layout padrao -->
    
    <router-view/><!-- Renderiza conteudo diferenciais das paginas -->
    
  </div>
</template>


<style scoped>
  .container{
    display: flex; 
    height: 100vh; 
  }


</style>
