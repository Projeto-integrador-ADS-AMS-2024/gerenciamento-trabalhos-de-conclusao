<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/" class="router-link">Usuários</router-link> > <router-link to="/editarUsuario" class="router-link">Editar Usuário</router-link></h2>
        </div>
        <div>
            <form action="turma.html">
                <div>
                    <div>
                        <label for="areaAtuacao">Área de Atuação:</label>
                        <select name="areaAtuacao" id="areaAtuacao" required>
                            <option value="" disabled selected> Selecione a Atuação do Usuário</option>   
                            <option value="Aluno">Aluno</option>
                            <option value="Professor">Professor</option>
                        </select>
                    </div>
    
                    <div id="campos-comuns" style="display: none;">

                        <div id="campos-aluno" style="display: none;">
                            <div>
                                <label for="ra">RA:</label><br>
                                <input type="text" id="ra" name="ra" placeholder="Insira o RA" required><br>
                            </div>

                            <div>
                                <label for="turma">Turma:</label>
                                <select name="turma" id="turma" required>
                                    <option value="" disabled selected>Selecione uma Turma</option>   
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="nome">Nome:</label><br>
                            <input type="text" id="nome" name="nome" placeholder="Insira o nome" required><br>
                        </div>

                        <div>
                            <label for="cpf">CPF:</label><br>
                            <input type="text" id="cpf" name="cpf" placeholder="Insira o CPF" required><br>
                        </div>
                        
                        <div>
                            <label for="dt_nascimento">Data de Nascimento:</label><br>
                            <input type="date" id="dt_nascimento" name="dt_nascimento" required><br>
                        </div>

                        <div>
                            <label for="email">Email:</label><br>
                            <input type="email" id="email" name="email" placeholder="Insira o email" required><br>
                        </div>

                        <div>
                            <label for="senha">Senha:</label><br>
                            <input type="password" id="senha" name="senha" placeholder="Insira a senha" required><br>
                        </div>

                        <div id="campos-professor" style="display: none;">
                            <div>
                                <label for="papel">Papel:</label>
                                <select name="papel" id="papel" required>
                                    <option value="" disabled selected>Selecione o Papel do Professor</option>   
                                    <option value="Diretor">Diretor</option>
                                    <option value="Coordenador">Coordenador</option>
                                    <option value="Orientador">Orientador</option>
                                    <option value="TG">TG</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="div-btn">
                    <button type="submit">Editar Usuário</button>
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