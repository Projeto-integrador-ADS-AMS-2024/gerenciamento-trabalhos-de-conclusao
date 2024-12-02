<script>
import TextInput from '@/components/forms/TextInput.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
import Button from '@/components/forms/Button.vue';
import { ref, onMounted} from 'vue';
import { Turma } from '@/services/turma';

export default {
    name: 'CadastrarTurmas',
    components: { TextInput, SelectInput, CheckBoxInput, Button },
    setup() {
        const nome = ref('')
        const turnosSelecionados = ref([])
        const disciplinaId = ref('')// Definido como único para simplificar a seleção
        const cursoId = ref('') // Definido como único para simplificar a seleção

        
        const cursosOptions = ref([])

        const disciplinasOptions = ref([])

        const fetchDisciplinasOptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/disciplinas');
                const data = await response.json();
                disciplinasOptions.value = data
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };


        const fetchCursosOptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/cursos');
                const data = await response.json();
                cursosOptions.value = data
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        onMounted(fetchDisciplinasOptions); 
        onMounted(fetchCursosOptions); 


        return{
            nome,disciplinaId,cursoId,disciplinasOptions,cursosOptions,turnosSelecionados
        }
        
    },
    methods: {
        async newClass() {
            const turnos = this.turnosSelecionados.toString()// Transforma o array em uma string separada por vírgulas

            if (!this.nome || !this.disciplinaId || !this.cursoId || !turnos) {
                // alert('Por favor, preencha todos os campos.');
                console.log(this.nome, this.disciplinaId, this.cursoId, turnos)
                return;
            }

            try {
                const novaTurma = {
                    nome: this.nome,
                    turno: turnos, 
                    cursoId: this.cursoId,
                    disciplinaId: this.disciplinaId
                };
                // console.log(novaTurma)

                const turmaCriada = await Turma.createTurma(novaTurma);
                location.replace('/')
                console.log('Turma criada:', turmaCriada);
                
            }catch (error) {
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
                <router-link to="/admin/turmas" class="router-link">Turmas</router-link> > 
                <router-link to="/admin/cadastrarTurmas" class="router-link">Cadastrar Turmas</router-link>
            </h2>
        </div>
        <div>        
            <form @submit.prevent="newClass">
                <!-- Nome da Turma -->
                <div>
                    <TextInput id="nome" v-model="nome" label="Nome da Turma" placeholder="Insira o nome da turma"            
                    @blur="focusInput(id)" info="Preencha corretamente este campo!"/>
                </div>

                <!-- Curso -->
                <div>
                    <SelectInput 
                        id="cursoId" 
                        v-model="cursoId"
                        label="Curso da Turma" 
                        :options="cursosOptions" 
                        placeholder="Selecionar..."
                    />

                    <!-- <SelectInput
                        id="disciplinaId"
                        v-model="disciplinaId"
                        label="Disciplina da Turma"
                        :options="disciplinasOptions"
                        placeholder="Selecionar..."
                    /> -->
                </div>

                <!-- Disciplina -->
                <div>
                    <SelectInput
                        id="disciplinaId"
                        v-model="disciplinaId"
                        label="Disciplina da Turma"
                        :options="disciplinasOptions"
                        placeholder="Selecionar..."
                    />
                    <!-- {{ disciplinaId }} -->
                    <!-- <SelectInput
                        id="coordenador"
                        v-model="coodernador"
                        label="Coordenador do Curso"
                        :options="coordenadoresOptions"
                        placeholder="Selecionar..."
                    /> -->
                </div>
                
                <!-- Turno da turma -->
                <div>
                    <label>Turno da Turma</label><br>
                    <div class="div-flex-checkbox">
                        <div class="col-checkbox">
                            <div>
                                <input type="checkbox" id="matutino" value="Matutino" v-model="turnosSelecionados"> 
                                <label for="matutino">Matutino</label>
                            </div>     
                            <div>
                                <input type="checkbox" id="vespertino" value="Vespertino" v-model="turnosSelecionados"> 
                                <label for="vespertino">Vespertino</label>
                            </div>  
                            <div>
                                <input type="checkbox" id="noturno" value="Noturno" v-model="turnosSelecionados"> 
                                <label for="noturno">Noturno</label>
                            </div>                      
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

.col-checkbox {
        display: flex;
        flex-wrap: wrap; /* Permite que os elementos quebrem de linha */
        gap: 20px; /* Espaço entre os campos */
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 20px;

        div {
            display: flex;
            input[type="checkbox"] {
                transform: scale(1.5);
                border: 1px solid #ccc;
                margin-right: 20px; 
            } 
        } 
    };
</style>
