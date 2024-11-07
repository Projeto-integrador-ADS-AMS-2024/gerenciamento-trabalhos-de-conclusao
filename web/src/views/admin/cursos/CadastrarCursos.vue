<script setup>
import { onMounted } from 'vue';

 
onMounted(() => {
    const areaAtuacao = document.getElementById("areaAtuacao");
    const camposComuns = document.getElementById("campos-comuns");
    const camposProfessor = document.getElementById("campos-professor");
    const camposAluno = document.getElementById("campos-aluno");

    areaAtuacao.addEventListener('change', function() {
        // Exibe os campos comuns para ambas as posições
        camposComuns.style.display = "block"; 

        // Limpa a exibição de campos específicos
        camposAluno.style.display = "none";
        camposProfessor.style.display = "none";

        const papel = document.getElementById("papel")
        const ra = document.getElementById("ra")
        const turma = document.getElementById("turma")
        
        papel.removeAttribute("disabled")
        ra.removeAttribute("disabled")
        turma.removeAttribute("disabled")

        // Exibe os campos específicos de acordo com a posição selecionada
        if(areaAtuacao.value === "Aluno"){
            camposAluno.style.display = "block";
            papel.setAttribute("disabled", "");
        } else if(areaAtuacao.value === "Professor"){
            camposProfessor.style.display = "block";
            ra.setAttribute("disabled", "");
            turma.setAttribute("disabled", "");              
        }
    });
})
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos" class="router-link">Cursos</router-link> > <router-link to="/cadastrarCursos" class="router-link">Cadastrar Cursos</router-link></h2>
        </div>
        <div>        
            <form>
                <div>
                    <label for="nome">Nome do Curso</label><br>
                    <input type="text" id="nome" name="nome" placeholder="Insira o nome" required><br>
                </div>
            
                <div>
                    <label for="duracao">Duração do Curso</label>                   
                    <div class="div-flex-input">
                        <div>
                            <input type="number" id="duracao" name="duracao" min="0" max="10" required>
                        </div>
                        <div>
                            <select name="tipoPeriodo" id="tipoPeriodo" required>
                                <option value="" disabled selected>Selecione a Duração do Curso</option>   
                                <option value="Semestral">Meses</option>
                                <option value="Anual">Anos</option>
                            </select>
                        </div>
                    </div>
                </div>
            
                <div>
                    <label for="coordenador">Coordenador do Curso</label><br>
                    <select name="coodernador" id="coodernador" required>
                        <option value="" disabled selected>Selecione o Coordenador</option>   
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
            
                <div>
                    <label>Período do Curso</label><br>
                    <div class="col-checkbox">
                        <div>
                            <input type="checkbox" name="matutino" value="matutino"> 
                            <label>Matutino</label>
                        </div>
            
                        <div>
                            <input type="checkbox" name="vespertino" value="vespertino">  
                            <label>Vespertino</label>  
                        </div>
            
                        <div>
                            <input type="checkbox" name="noturno" value="noturno"> 
                            <label>Noturno</label>         
                        </div>                           
                    </div>
                </div>
                <div class="div-btn">
                    <button type="submit">Cadastrar Curso</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style >
    
</style>