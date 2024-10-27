<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/disciplinas">Disciplinas</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarDisciplinas">
                <div class="card">
                    <img src="../../assets/img/book-solid.svg" alt="Visualizar Usuários" >
                    <div>
                        <span>Visualizar Disciplinas</span>                    
                    </div>
                </div>
            </router-link>

            <router-link to="/cadastrarDisciplinas">
                <div class="card">
                    <img src="../../assets/img/book-medical-solid.svg" alt="Adicionar Usuários" >
                    <div>
                        <span>Cadastrar Disciplinas</span>
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


