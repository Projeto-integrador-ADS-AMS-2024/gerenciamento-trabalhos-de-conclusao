document.addEventListener("DOMContentLoaded", () => {  
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
