document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const turnoError = document.querySelector(".turno-erro");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (validateTurno(data, turnoError)) {
            // Adicionar os valores das checkbox que foram marcadas no campo `turno`
            data.turno = `${data.vespertino ?? ""}, ${data.matutino ?? ""}, ${data.noturno ?? ""}`

            console.log(data);

            // Envio da requisição para a API
            fetch("/cursos", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json" 
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                // .then(() => location.replace("/cursos"))
                .catch(err => console.log(err))
        }
    })
})

// Obriga o usuario a selecionar um turno
const validateTurno = (data, errorElement) => {
    if (data.noturno || data.vespertino || data.matutino) {
        errorElement.classList.add("invisible");
        return true;
    }

    errorElement.classList.remove("invisible");
    return false;
}