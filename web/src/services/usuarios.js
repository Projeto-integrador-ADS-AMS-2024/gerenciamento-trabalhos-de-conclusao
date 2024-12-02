// Listar todas os usuarios (Read)
export class Usuario{
    static async getAllUsuarios () {
        try {
            const res = await fetch('http://localhost:3000/usuarios');
            if (!res.ok) throw new Error('Erro ao buscar usuarios');
    
            const data = await res.json();
            
            return data;
        } catch (error) {
            console.error('Erro no serviço getAllUsuarios:', error);
        }
    };

    static async createUsuario(novoUsuario,atuacaoUsuario) {
        try {
            var atuacao = '';

            if(atuacaoUsuario == 'Aluno'){
                atuacao = 'alunos';
            }
            if(atuacaoUsuario == 'Professor'){
                atuacao = 'professores';
            }

            const res = await fetch(`http://localhost:3000/${atuacao}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoUsuario),
            });

            if (!res.ok) {
                const errorDetails = await res.text(); // Captura os detalhes do erro da resposta
                console.error('Erro no serviço createUsuario:', errorDetails);
                throw new Error(`Erro ao criar usuario: ${errorDetails}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            // Garante que o erro seja capturado e exibido corretamente
            console.error('Erro no serviço createUsuario:', error);
            throw error; 
        }
    }

}