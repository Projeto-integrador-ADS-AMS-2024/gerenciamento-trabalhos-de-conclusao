<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos" class="router-link">Cursos</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarCursos" class="router-link">
                <div class="card">
                    <div class="div-info">
                        <img src="../../assets/img/user-group.svg" alt="Visualizar Usuários" >
                        <span>Visualizar Cursos</span>                    
                    </div>
                </div>
            </router-link>
            <router-link to="/cadastrarCursos" class="router-link">
                <div class="card">
                    <div class="div-info">
                        <img src="../../assets/img/add-user.svg" alt="Adicionar Usuários" >
                        <span>Cadastrar Cursos</span>
                    </div>   
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style>
    
</style>