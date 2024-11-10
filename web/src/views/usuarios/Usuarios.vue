<script>
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';
    
    import User from '@/components/User.vue';
    import { onMounted, ref } from 'vue';

    export default {
        name: 'Disciplinas',
        components: { Card, PageId, User },
        data(){
            return{

            }
        },
        setup() {
            const users = ref([]);

            const fetchUsers = async () => {
                try {
                    const res = await fetch('http://localhost:3000/usuarios');
                    const data = await res.json();
                    users.value = [...data.alunos, ...data.professores];
                } catch (error) {
                    console.error('Erro ao buscar usuários:', error);
                }
            };

            onMounted(fetchUsers);

            return { users };
        }
    };


</script>

<template>     
    <div class="div-conteudo-principal">
        <div>
            <PageId 
                label="Usuários"
            />
        </div>
        <!-- <div>
            <Card 
                name="nome do Usuários"
                routeCard="/visualizarUsuários" 
                routeEdit="/editarUsuários"
                routeDelete="/delete"
            />
        </div> -->

        <div>
            <span v-if="!users">Carregando usuários...</span>
                
                <div v-else class="users" id="tabela">
                    <table>
                        <thead>
                            <tr>
                                <th>RA</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <User v-for="user in users" :user="user" />
                        </tbody>
                    </table>
                </div>
        </div>
    </div>

</template>


<style >
    
.users {
    width: 100%;
}

table {
    width: 100%;
}

th, td {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1rem;
}

tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color .1s;
}

th:hover, td:hover {
    cursor: default;
}   
</style>