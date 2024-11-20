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

}