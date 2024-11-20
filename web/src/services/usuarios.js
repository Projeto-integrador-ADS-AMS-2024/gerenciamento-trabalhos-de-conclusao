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

}