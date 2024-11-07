<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/disciplinas" class="router-link">Disciplinas</router-link> > <router-link to="/cadastrarDisciplinas" class="router-link">Cadastrar Disciplinas</router-link></h2>
        </div>
        <div>        
            <form action="turma.html">
                <div>
                    <label for="nome">Nome da Disciplina</label><br>
                    <input type="text" id="disciplina" name="disciplina" placeholder="Insira a disciplina" required><br>
                </div>
                <div>
                    <label for="professor">Professor:</label>
                    <select name="professor" id="professor" required>
                        <option value="" disabled selected>Selecione o Professor</option>   
                        <option value="A">A1</option>
                        <option value="B">B1</option>
                    </select>
                </div>                            
                <div class="div-btn">
                    <button type="submit">Cadastrar Disciplina</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    
    export default {
        
    }
</script>

<style >
    
</style>