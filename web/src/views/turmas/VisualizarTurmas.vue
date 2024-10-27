<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/turmas" class="router-link">Turmas</router-link> > <router-link to="/visualizarTurmas" class="router-link">Visualizar Turmas</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_turma" name="filtro_turma" class="inpt-filtro" placeholder="Filtrar Turma" ><br>
                <div class="div-logo-pesquisa">
                    <img src="../../assets/img/icons8-pesquisar.svg" />
                </div>
            </div>
            <div class="div-cards">
                <router-link to="cursoTal.html" id="cardLink" class="router-link">
                    <div class="card">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarTurma" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <img src="../../assets/img/users-rectangle.svg" alt="Visualizar Usuários" >
                            <span>Turma 1</span>                    
                        </div>
                    </div>
                </router-link>     
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