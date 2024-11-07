<script setup>
import User from '@/components/User.vue';
import { onMounted, ref } from 'vue';

const users = ref(null);

const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/usuarios'); 
    const data = await res.json();

    users.value = [...data.alunos, ...data.professores];
}

onMounted(async () => {
    await fetchUsers();
});

</script>

<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/" class="router-link">Usuários</router-link>  > <router-link to="/visualizarUsuarios" class="router-link">Visualizar Usuários</router-link></h2>
        </div>
        <div>
            <!-- <div class="div-filtro">
                <input type="text" id="filtro_nome" name="filtro_nome" class="inpt-filtro" placeholder="Filtrar Usuário" ><br>
                <div class="div-logo-pesquisa">
                    <img src="../../assets/img/icons8-pesquisar.svg" />
                </div>
            </div> -->
            
            <div class="div-cards">
                <!-- listar usuarios -->

                <span v-if="!users">Carregando usuários...</span>
                
                <div v-else class="users">
                    <table>
                        <thead>
                            <tr>
                                <th>RA</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <User v-for="user in users" :user="user" />
                        </tbody>
                    </table>
                </div>

                <!-- <router-link to="/cursoTal" id="cardLink" class="router-link">
                    <div class="card-usuario">
                        <div class="div-funcoes-card">
                            <button>
                                <router-link to="/editarUsuario" class="router-link">Editar</router-link>
                            </button>
                            <button>
                                <router-link to="" class="router-link">Excluir</router-link>
                            </button>
                        </div>
                        <div class="div-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span>User 1</span>                    
                        </div>
                    </div>
                </router-link>            -->
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