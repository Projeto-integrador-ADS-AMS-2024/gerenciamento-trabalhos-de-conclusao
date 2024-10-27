<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/turmas">Turmas</router-link></h2>
        </div>
        <div class="div-cards">
            <router-link to="/visualizarTurmas">
                <div class="card">
                    <img src="../../assets/img/users-rectangle.svg" alt="Visualizar Usuários" >
                    <div>
                        <span>Visualizar Turmas</span>                    
                    </div>
                </div>
            </router-link>

            <router-link to="/cadastrarTurmas">
                <div class="card">
                    <img src="../../assets/img/users-gear.svg" alt="Adicionar Usuários" >
                    <div>
                        <span>Cadastrar Turmas</span>                    
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


