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
                <!-- Listar usuários -->
                <div @click="abrirModal" class="card-usuario">
                    <img src="../../assets/img/user-group.svg" alt="Visualizar Usuários" />
                    <div>
                        <span>Usuário 1</span>                    
                    </div>
                </div>

                <!-- Modal para exibir informações do usuário -->
                <div v-if="mostrarModal" class="modal" @click.self="fecharModal">
                    <div class="modal-content">
                        <span class="close" @click="fecharModal">&times;</span>
                        <img src="../src/assets/img/logo.jpg" alt="Visualizar Usuários" />
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

<script>export default {
    data() {
        return {
            mostrarModal: false,  // Controla a visibilidade do modal
        };
    },
    methods: {
        abrirModal() {
            this.mostrarModal = true;
        },
        fecharModal() {
            this.mostrarModal = false;
        }
    }
}
</script>

<style >
    /* Estilos para o modal e outros componentes */
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
}

.close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
}
</style>