<script setup>

</script>

<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/" class="router-link">Usuários</router-link>  > <router-link to="/visualizarUsuarios" class="router-link">Visualizar Usuários</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_nome" name="filtro_nome" class="inpt-filtro" placeholder="Filtrar Usuário" ><br>
                <div class="div-icon-pesquisa">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de uma bússola</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            
            <div class="div-cards">
                <!-- listar usuarios -->

                

               
            </div>
        </div>
    </div>

</template>


<style>

.users {
    width: 100%;
}

table {
    width: 100%;
}

th, td {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1rem;
}

tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color .1s;
}

th:hover, td:hover {
    cursor: default;
}   
</style>