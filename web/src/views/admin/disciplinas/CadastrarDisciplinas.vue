<script>
import Button from '@/components/forms/Button.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import { Disciplina } from '@/services/disciplina';

export default {
    name: 'CadastrarDisciplinas',
    components: { Button, SelectInput, TextInput },
    data() {
        return {
            nome: '',               // Para armazenar o nome da disciplina
            coordenador: '',        // Para armazenar o coordenador selecionado
            coordenadoresOptions: ['jailton', 'uel']  // Opções dos coordenadores
        };
    },
    methods: {
        async newDisciplines() {
            try {
                const novaDisciplina = {
                    nome: this.nome,
                    coordenador: this.coordenador
                };

                const disciplinaCriada = await Disciplina.createDiscipline(novaDisciplina);

                // Redireciona para a página de disciplinas após a criação
                this.$router.push('/admin/disciplinas'); // Pode substituir com o caminho de sua escolha


                // Aqui você pode adicionar a lógica de criação da turma
                // Exemplo: Chamar uma API para criar a turma ou realizar a lógica necessária
                console.log('Disciplina criada:', Disciplina);
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
                    <TextInput 
                        id="nome"
                        label="Nome da Disciplina"
                        placeholder="Insira o nome da disciplina"
                        v-model="nome" 
                    />
                </div>

                <div>
                    <SelectInput 
                        id="coordenador"
                        label="Coordenador do Curso"
                        :options="coordenadoresOptions"
                        v-model="coordenador" 
                    />
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
