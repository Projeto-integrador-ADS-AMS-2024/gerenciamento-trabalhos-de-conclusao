// Listar todas os disciplinas (Read)
export class Disciplinas{
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

}