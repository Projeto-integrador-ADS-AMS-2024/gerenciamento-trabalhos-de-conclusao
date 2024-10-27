<template>     
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/" class="router-link">Usuários</router-link>  > <router-link to="/visualizarUsuarios" class="router-link">Visualizar Usuários</router-link></h2>
        </div>
        <div>
            <div class="div-filtro">
                <input type="text" id="filtro_nome" name="filtro_nome" class="inpt-filtro" placeholder="Filtrar Usuário" ><br>
                <div class="div-logo-pesquisa">
                    <img src="../../assets/img/icons8-pesquisar.svg" />
                </div>
            </div>
            
            <div class="div-cards">
                <!-- listar usuarios -->
                <router-link to="/cursoTal" id="cardLink" class="router-link">
                    <div class="card-usuario">
                        <img src="../../assets/img/user-group.svg" alt="Visualizar Usuários" >
                        <div>
                            <span>User 1</span>                    
                        </div>
                    </div>
                </router-link>

                <div id="modal-user" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="../src/assets/img/logo.jpg" alt="Visualizar Usuários" >
                        <h2>Nome: </h2>
                        <p>CPF:</p>
                        <p>Email:</p>
                        <p>Senha:</p>
                        <p>Data de Nascimento:</p>

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