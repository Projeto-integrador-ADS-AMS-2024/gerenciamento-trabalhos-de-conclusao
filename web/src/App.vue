<script setup>
// Importação dos componentes presentes no layout padrao
import { useRoute } from 'vue-router';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import NavbarMobile from './components/NavbarMobile.vue';
import PluginAcessibility from './components/PluginAcessibility.vue';


const route = useRoute();
</script>

<template>

  <Header /> <!-- Componente presente no layout padrao -->
  <NavbarMobile />
  <div class="container">
    <Aside v-if="!route.meta.hideDefaultComponents" /> <!-- Componente presente no layout padrao -->
    <PluginAcessibility v-if="!route.meta.hideDefaultComponents" /> <!-- Componente presente no layout padrao -->
    
    <router-view/> <!-- Renderiza conteudo diferenciais das paginas -->
    
  </div>
</template>


<style scoped>
.container {
  display: flex;  
}
</style>
