<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/" class="router-link">Usuários</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarUsuarios" class="router-link">
                <div class="card">
                    <div class="div-info">
                        <img src=".././assets/img/user-group.svg" alt="Visualizar Usuários" >
                        <span>Visualizar Usuários</span>                    
                    </div>
                </div>
            </router-link>
            <router-link to="/cadastrarUsuarios" class="router-link">
                <div class="card">
                    <div class="div-info">
                        <img src=".././assets/img/add-user.svg" alt="Adicionar Usuários" >
                        <span>Cadastrar Usuários</span>                     
                    </div>
                </div>
            </router-link>
            <router-link to="/importarUsuarios" class="router-link">
                <div class="card">
                    <div class="div-info">
                        <img src=".././assets/img/upload.svg" alt="Importar Usuários" >
                        <span>Importar Usuários</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style >
    
</style>