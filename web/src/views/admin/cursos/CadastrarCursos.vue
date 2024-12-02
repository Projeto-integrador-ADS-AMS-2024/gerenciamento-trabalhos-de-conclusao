<script>
    import Button from '@/components/forms/Button.vue';
    import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
    import TextInput from '@/components/forms/TextInput.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';
    import { ref, onMounted } from 'vue';
    import { Curso } from '@/services/curso';

    export default{
        name: 'CadastrarCurso',
        components: { Button, TextInput, SelectInput, CheckBoxInput},
        setup() {
            const nome = ref('')
            const turnosSelecionados = ref([])
            const duracao = ref('')
            const tipoPeriodo = ref('')
            const coodernador = ref('')
            const coordenadoresOptions = ref([])

            const duracaoOptions = [1,2,3,4,5,6,7,8,9,10,11,12]
            const tipoPeriodoOptions = {anual : 'Ano(s)', semestral : 'Semestre(s)'}

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

            return{
                nome,duracaoOptions,tipoPeriodoOptions,coordenadoresOptions, turnosSelecionados,duracao,tipoPeriodo,coodernador
            }
            
        },
        onMounted(){
            this.fetchCoodenadorOptions();
        },
        methods: {
            async newCourse() {
                // console.log(this.areaAtuacao)
                const turnos = this.turnosSelecionados.toString()

                if (!this.nome || !this.duracao || !this.tipoPeriodo || !this.coodernador ) {
                    // alert('Por favor, preencha todos os campos.');
                    console.log("Curso: ", 'Nome:',this.nome , 'Duracao:',this.duracao , 'Tipo Duracao:',this.tipoPeriodo , 'Coordenador:',this.coodernador)
                    return;
                }
                
                try {
                    const novoCurso = {
                        nome: this.nome,
                        duracao: `${this.duracao} ${Object.entries(this.tipoPeriodoOptions).find(([key, val]) => val === this.tipoPeriodo)?.[1]}`,
                        coordenador: this.coodernador,
                        tipoPeriodo: Object.entries(this.tipoPeriodoOptions).find(([key, val]) => val === this.tipoPeriodo)?.[0],
                        turno: turnos // Transforma o array em uma string separada por vírgulas
                    };
                    // console.log(novoCurso)
                    const cursoCriado = await Curso.createCurso(novoCurso);
                    location.replace('/admin/cursos')
                    console.log('Curso criada:', cursoCriado);
                } catch (error) {
                    console.error('Erro ao criar curso:', error);
                }
            }
        }
    }

</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/admin/cursos" class="router-link">Cursos</router-link> > <router-link to="/admin/cadastrarCursos" class="router-link">Cadastrar Cursos</router-link></h2>
        </div>
        <div>        
            <form @submit.prevent="newCourse">
                <!-- Nome do Curso -->
                <div>
                    <TextInput id="nome" label="Nome do Curso" v-model="nome" placeholder="Insira o nome do curso" info="Preencha esse campo corretamente!"/>
                </div>

                <!-- Duração do Curso -->
                <div class="div-flex-input">
                    <div>
                        <!-- Duracao -->
                        <SelectInput id="duracao" label="Duração do Curso" v-model="duracao" :options=duracaoOptions placeholder="Selecionar..." />
                    </div>                
                    <div>
                        <!-- Periodo  -->
                        <SelectInput id="tipoPeriodo" label="." v-model="tipoPeriodo" :options=tipoPeriodoOptions placeholder="Selecionar..."/>
                    </div>
                </div>

                <div>
                 
                    <!-- Coodenador do curso -->
                    <SelectInput
                        id="coordenador"
                        v-model="coodernador"
                        label="Coordenador do Curso"
                        :options="coordenadoresOptions"
                        placeholder="Selecionar..."
                    />
                </div>

                <!-- Turno do curso -->
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
                <Button>Cadastrar Curso</Button>                       
            </form>
        </div>
    </div>
</template>


<style >
    .div-flex-input{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        div{
            width: 100%;
        }
    }

    .div-flex-checkbox{
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