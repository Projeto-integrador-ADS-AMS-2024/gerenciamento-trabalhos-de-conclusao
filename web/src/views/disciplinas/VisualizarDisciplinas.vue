<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/disciplinas" class="router-link">Disciplinas</router-link> > <router-link to="/visualizarDisciplinas" class="router-link">Visualizar Disciplinas</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_disciplina" name="filtro_disciplina" class="inpt-filtro" placeholder="Filtrar Disciplina" ><br>
                <div class="div-logo-pesquisa">
                    <img src="../../assets/img/icons8-pesquisar.svg" />
                </div>
            </div>
            <div class="div-cards">
                <div class="div-card">
                    <!-- listar disciplina -->
                    <router-link to="" class="router-link">
                        <div class="card-longo">
                            <img src="../../assets/img/book-solid.svg" alt="Visualizar Usuários" >
                            <div>
                                <span>Disciplinas 1</span>                    
                            </div>
                        </div>
                    </router-link>                                                            
                </div>  
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style >
    
</style>