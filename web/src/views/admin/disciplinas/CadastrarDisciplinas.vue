<script>
import Button from '@/components/forms/Button.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import { Disciplina } from '@/services/disciplina';
import { ref, onMounted } from 'vue';

export default {
    name: 'CadastrarDisciplinas',
    components: { Button, SelectInput, TextInput },
    setup() {
        const nome = ref('')               // Para armazenar o nome da disciplina
        const coodernador = ref('')
        const coordenadoresOptions = ref([])

        const fetchCoodenadorOptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/professores');
                const data = await response.json();
                // Filtrar apenas os que têm o atributo 'coordenador'
                coordenadoresOptions.value = data.filter(professor => professor.papel === 'Coordenador');
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        onMounted(fetchCoodenadorOptions); 
        
        return {
            nome, coodernador, coordenadoresOptions    
        };
    },
    methods: {
        async newDisciplines() {
            if (!this.nome) {
                // alert('Por favor, preencha todos os campos.');
                console.log('Preencha:', this.nome)
                return;
            }

            try {
                const novaDisciplina = {
                    nome: this.nome
                };
                // console.log(novaDisciplina)

                const disciplinaCriada = await Disciplina.createDiscipline(novaDisciplina);
                location.replace('/admin/disciplinas')
                console.log('Disciplina criada:', novaDisciplina);

                // Aqui você pode adicionar a lógica de criação da turma
                // Exemplo: Chamar uma API para criar a turma ou realizar a lógica necessária
            } catch (error) {
                console.error('Erro ao criar disciplina:', error);
            }
        }
    }
};
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/admin/disciplinas" class="router-link">Disciplinas</router-link> > <router-link to="/admin/cadastrarDisciplinas" class="router-link">Cadastrar Disciplinas</router-link></h2>
        </div>
        <div>        
            <form @submit.prevent="newDisciplines">
                <div>
                    <TextInput id="nome" v-model="nome" label="Nome da Disciplina" placeholder="Insira o nome da disciplina"  />
                </div>
                <div>
                    <Button>Cadastrar Disciplina</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
/* Estilos personalizados (se necessário) */
</style>
