<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/">Usuários</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarUsuarios">
                <div class="card">
                    <img src=".././assets/img/user-group.svg" alt="Visualizar Usuários" >
                    <div>
                        <span>Visualizar Usuários</span>                    
                    </div>
                </div>
            </router-link>
            <router-link to="/cadastrarUsuarios">
                <div class="card">
                    <img src=".././assets/img/add-user.svg" alt="Adicionar Usuários" >
                    <div>
                        <span>Cadastrar Usuários</span>                     
                    </div>
                </div>
            </router-link>
            <router-link to="/importarUsuarios">
                <div class="card">
                    <img src=".././assets/img/upload.svg" alt="Importar Usuários" >
                    <div>
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