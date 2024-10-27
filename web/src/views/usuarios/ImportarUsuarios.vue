<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="homeAdmin.html" class="router-link">Usuários</router-link> > <router-link to="/importarUsuarios" class="router-link">Importar Usuários</router-link></h2>
        </div>
        <div>
            <form action="turma.html">
                <div>
                    <div>
                        <label for="arquivo">Anexe o Arquivo</label><br>
                        <input type="file" id="arquivo" name="arquivo" value="a" ><br>
                    </div>              
                </div>
                    
                <div class="div-btn">
                    <router-link to="turma.html">
                        <button type="submit">Cadastrar</button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
                
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>