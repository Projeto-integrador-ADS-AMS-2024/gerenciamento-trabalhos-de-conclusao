<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/admin/turmas" class="router-link">Turmas</router-link> > <router-link to="/admin/cadastrarTurmas" class="router-link">Cadastrar Turmas</router-link></h2>
        </div>
        <div>        
            <form action="turma.html">
                <div>
                    <label for="nome">Nome da Turma</label><br>
                    <input type="text" id="nome" name="nome" placeholder="Insira o Nome da Turma" required><br>
                </div>

                <div>
                    <label for="disciplina">Disciplina da Turma</label><br>
                    <select name="disciplina" id="disciplina" required>
                        <option value="" disabled selected>Selecione a Disciplina da Turma</option>   
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>

                <div>
                    <label for="curso">Curso da Turma</label><br>
                    <select name="curso" id="curso" required>
                        <option value="" disabled selected>Selecione o Curso da Turma</option>   
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>


                <div>
                    <label>Turno da Turma</label><br>
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
                    <button type="submit">Cadastrar Turma</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    
    export default {
        mounted() {
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
        }
    }
</script>

<style >
    
</style>