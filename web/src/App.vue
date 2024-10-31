<script setup>
  // Importação dos componentes presentes no layout padrao
  import Header from './components/Header.vue'
  import Aside from './components/Aside.vue'
  import PluginAcessibility from './components/PluginAcessibility.vue'
  import NavbarMobile from './components/NavbarMobile.vue';

  document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        window.location.href = '#conteudo-principal'; // Redireciona para a seção "Início"
    }
  });
</script>

<template>

  <Header /> <!-- Componente presente no layout padrao -->
  <NavbarMobile />
  <div class="container" >
    
    <Aside /><!-- Componente presente no layout padrao -->
    <PluginAcessibility /><!-- Componente presente no layout padrao -->
    <router-view/><!-- Renderiza conteudo diferenciais das paginas -->
    
  </div>
</template>


<style scoped>
  .container{
    display: flex; 
     
  }


</style>
