<script setup>
  // Importação dos componentes presentes no layout padrao
  import Header from './components/Header.vue'
  import Aside from './components/Aside.vue'
  import PluginAcessibility from './components/PluginAcessibility.vue'
</script>

<template>
   <Header /> <!-- Componente presente no layout padrao -->
  <div class="container">
    <Aside /><!-- Componente presente no layout padrao -->
    <PluginAcessibility /><!-- Componente presente no layout padrao -->
    
    <router-view/><!-- Renderiza conteudo diferenciais das paginas -->
  
  </div>
</template>



<style scoped>
  main{
    padding: 20px; 

    h2{
      margin-bottom: 10px;
    }

    a{
      color: black;
    }

    a:visited {
      color: black; /* Mesma cor do link normal */
    }
  }
  
  .container{
    display: flex; 
    height: 100vh; 
  }
</style>
