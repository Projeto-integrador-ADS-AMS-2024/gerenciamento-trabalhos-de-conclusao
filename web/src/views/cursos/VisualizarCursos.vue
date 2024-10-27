<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos" class="router-link">Cursos</router-link> > <router-link to="/visualizarCursos" class="router-link">Visualizar Cursos</router-link></h2>
        </div>
        <div>
            <div class="div-cards">
                <!-- listar cursos -->
                <router-link to="/cursoEspecifico" class="router-link">
                    <div class="card">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarCurso" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <img src="../../assets/img/graduation-cap.svg" alt="Visualizar Usuários" >
                            <span>Curso 1a</span>                    
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