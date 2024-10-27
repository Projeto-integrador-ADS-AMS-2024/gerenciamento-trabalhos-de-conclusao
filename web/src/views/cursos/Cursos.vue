<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos">Cursos</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarCursos">
                <div class="card">
                    <img src="../../assets/img/user-group.svg" alt="Visualizar Usuários" >
                    <div>
                        <span>Visualizar Cursos</span>                    
                    </div>
                </div>
            </router-link>
            <router-link to="/cadastrarCursos">
                <div class="card">
                    <img src="../../assets/img/add-user.svg" alt="Adicionar Usuários" >
                    <div>
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