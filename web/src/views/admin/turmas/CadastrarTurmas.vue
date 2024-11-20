<script>
import TextInput from '@/components/forms/TextInput.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
import Button from '@/components/forms/Button.vue';
import { Turma } from '@/services/turma';

export default {
    name: 'CadastrarTurmas',
    components: { TextInput, SelectInput, CheckBoxInput, Button },
    data() {
        return {
            nome: '',
            disciplinaId: null, // Definido como único para simplificar a seleção
            cursoId: null, // Definido como único para simplificar a seleção
            turnos: [], // Inicialização correta para checkboxes
            disciplinasOptions: [
                1,2,3
            ],
            cursosOptions: [
                1,2,3 
            ]
        };
    },
    methods: {
        async newClass() {
            try {
                const novaTurma = {
                    nome: this.nome,
                    disciplinaId: this.disciplinaId,
                    cursoId: this.cursoId,
                    turno: this.turnos.join(',') // Transforma o array em uma string separada por vírgulas
                };

                const turmaCriada = await Turma.createTurma(novaTurma);

                console.log('Turma criada:', turmaCriada);
            } catch (error) {
                console.error('Erro ao criar turma:', error);
            }
        }
    }
};
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > 
                <router-link to="/turmas" class="router-link">Turmas</router-link> > 
                <router-link to="/cadastrarTurmas" class="router-link">Cadastrar Turmas</router-link>
            </h2>
        </div>
        <div>        
            <form @submit.prevent="newClass">
                <!-- Nome da Turma -->
                <div>
                    <TextInput id="nome" v-model="nome" label="Nome da Turma" placeholder="Insira o nome da turma"            
                    @blur="focusInput(id)" info="Preencha corretamente este campo!"/>
                </div>
                
                <!-- Disciplina -->
                <div>
                    <SelectInput
                        v-model="disciplinaId"
                        id="disciplinaId"
                        label="Disciplina da Turma"
                        :options="disciplinasOptions"
                        placeholder="Selecionar..."
                    />
                </div>

                <!-- Curso -->
                <div>
                    <SelectInput 
                        v-model="cursoId"
                        id="cursoId" 
                        label="Curso da Turma" 
                        :options="cursosOptions" 
                        placeholder="Selecionar..."
                    />
                </div>

                <!-- Turno da turma -->
                <div>
                    <label>Turno da Turma</label><br>
                    <div class="div-flex-checkbox">
                        <!-- <div>Checked names: {{ turnos }}</div> -->
                        <div>
                            <CheckBoxInput id="matutino" label="Matutino" value="matutino" v-model:turnos="turnos" />
                        </div>
                        <div>
                            <CheckBoxInput id="vespertino" label="Vespertino" value="vespertino" v-model:turnos="turnos" />
                        </div>
                        <div>
                            <CheckBoxInput id="noturno" label="Noturno" value="noturno" v-model:turnos="turnos" />
                        </div>
                    </div>
                </div>
                <Button>Cadastrar Turma</Button>
            </form>
        </div>
    </div>
</template>

<style>
.div-flex-input {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    div {
        width: 100%;
    }
}

.div-flex-checkbox {
    display: flex;
    gap: 20px;
}
</style>
