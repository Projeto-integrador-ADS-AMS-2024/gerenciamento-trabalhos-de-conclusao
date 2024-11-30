// Listar todas os cursos (Read)
export class Curso{
    static async getAllCursos () {
        try {
            const res = await fetch('http://localhost:3000/cursos');
            if (!res.ok) throw new Error('Erro ao buscar cursos');
    
            const data = await res.json();
            
            return data;
        } catch (error) {
            console.error('Erro no serviço getAllCursos:', error);
        }
    };

    static async createCurso(novoCurso) {
        try {
            const res = await fetch('http://localhost:3000/cursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoCurso),
            });

            if (!res.ok) {
                const errorDetails = await res.text(); // Captura os detalhes do erro da resposta
                console.error('Erro no serviço createCurso:', errorDetails);
                throw new Error(`Erro ao criar curso: ${errorDetails}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            // Garante que o erro seja capturado e exibido corretamente
            console.error('Erro no serviço createCurso:', error);
            throw error; 
        }
    }

}