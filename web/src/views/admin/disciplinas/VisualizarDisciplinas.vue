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
                <!-- listar disciplina -->
                <router-link to="" class="router-link">
                    <div class="card">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarDisciplina" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span>Disciplinas 1</span>                    
                        </div>
                    </div>
                </router-link> 

                <router-link to="" class="router-link">
                    <div class="card">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarDisciplina" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span>Disciplinas 2</span>                    
                        </div>
                    </div>
                </router-link> 
                                

                <router-link to="" class="router-link">
                    <div class="card">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarDisciplina" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span>Disciplinas 3</span>                    
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