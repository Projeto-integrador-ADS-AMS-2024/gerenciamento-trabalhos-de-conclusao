<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos">Cursos</router-link> > <router-link to="/visualizarCursos">Visualizar Cursos</router-link></h2>
        </div>
        <div>
            <div class="div-cards">
                <!-- listar cursos -->
                <router-link to="cursoEspecifico.html">
                    <div class="card">
                        <img src="../../assets/img/graduation-cap.svg" alt="Visualizar Usuários" >
                        <div>
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