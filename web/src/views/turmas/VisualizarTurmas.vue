<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/turmas" class="router-link">Turmas</router-link> > <router-link to="/visualizarTurmas" class="router-link">Visualizar Turmas</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_turma" name="filtro_turma" class="inpt-filtro" placeholder="Filtrar Turma" ><br>
                <div class="div-icon-pesquisa">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de uma bússola</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
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
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <title>Icone de um grupo de 3 usuários</title>      
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
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