<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/turmas">Turmas</router-link> > <router-link to="/visualizarTurmas">Visualizar Turmas</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_turma" name="filtro_turma" class="inpt-filtro" placeholder="Filtrar Turma" ><br>
                <div class="div-logo-pesquisa">
                    <img src="../../assets/img/icons8-pesquisar.svg" />
                </div>
            </div>
            <div class="div-cards">
                <router-link to="cursoTal.html" id="cardLink">
                    <div class="card">
                        <img src="../../assets/img/users-rectangle.svg" alt="Visualizar Usuários" >
                        <div>
                            <span>Turma 1</span>                    
                        </div>
                    </div>
                </router-link>     

                <div id="modal-turma" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="../src/assets/img/logo.jpg" alt="Visualizar Usuários" >
                        <h2>Nome da turma: </h2>
                        <p>Turno:</p>
                        <p>Disciplina:</p>
                        <div>
                            <button>Editar</button>
                        </div>
                    </div>
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