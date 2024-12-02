// Listar todas os disciplinas (Read)
export class Disciplina{
    static async getAllDisciplinas () {
        try {
            const res = await fetch('http://localhost:3000/disciplinas');
            if (!res.ok) throw new Error('Erro ao buscar disciplinas');
    
            const data = await res.json();
            
            return data;
        } catch (error) {
            console.error('Erro no serviço getAllDisciplinas:', error);
        }
    };

    static async createDiscipline (novaDisciplina) {
        try {
            const res = await fetch('http://localhost:3000/disciplinas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaDisciplina),
            });
            
            if (!res.ok) {
                const errorDetails = await res.text(); // Captura os detalhes do erro da resposta
                console.error('Erro no serviço createDisciplinas:', errorDetails);
                throw new Error(`Erro ao criar disciplina: ${errorDetails}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Erro no serviço createDisciplina:', error);
            throw error;
        }
    };
}