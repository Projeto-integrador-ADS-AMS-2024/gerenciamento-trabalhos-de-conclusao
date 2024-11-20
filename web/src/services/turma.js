// Listar todas as turmas (Read)
export class Turma{
    static async getAllTurmas () {
        try {
            const res = await fetch('http://localhost:3000/turmas');
            if (!res.ok) throw new Error('Erro ao buscar turmas');
    
            const data = await res.json();
            
            return data;
        } catch (error) {
            console.error('Erro no serviço getAllTurmas:', error);
        }
    };


    static async createTurma(novaTurma) {
        try {
            const res = await fetch('http://localhost:3000/turmas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaTurma),
            });

            if (!res.ok) {
                const errorDetails = await res.text(); // Captura os detalhes do erro da resposta
                console.error('Erro no serviço createTurma:', errorDetails);
                throw new Error(`Erro ao criar turma: ${errorDetails}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            // Garante que o erro seja capturado e exibido corretamente
            console.error('Erro no serviço createTurma:', error);
            throw error; 
        }
    }
}