<script setup>
    import { ref } from 'vue';

    import Button from '../../components/forms/Button.vue';
    import TextInput from '../../components/forms/TextInput.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';

    const duracaoSelected = ref('');
    const duracaoOptions = ref([
        { text: '1', },
        { text: '2', },
        { text: '3', },
        { text: '4', },
        { text: '5', },
        { text: '6', },
        { text: '7', },
        { text: '8', },
        { text: '9', },
        { text: '10', },
        { text: '11', },
        { text: '12', }, 
    ]);

    const tipoPeriodoSelected = ref('')
    const tipoPeriodoOptions = ([
        {text: 'Meses', value:'semestral'},
        {text: 'Anos', value:'anual'},
    ]);
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/cursos" class="router-link">Cursos</router-link> > <router-link to="/cadastrarCursos" class="router-link">Cadastrar Cursos</router-link></h2>
        </div>
        <div>        
            <form>
                <div>
                    <TextInput
                        label="Nome do Curso:"
                        inputName="nome"
                        inputId="nome"
                        v-model="nome"
                        ariaLabel="Digite o nome do curso"
                    />
                </div>

                <div class="div-flex-input">
                    <div>
                        <SelectInput 
                            label="Duração do Curso:"
                            inputName="duracao"
                            inputId="duracao"
                            v-model="duracaoSelected"
                            :options="duracaoOptions"
                            ariaLabel="Duração do curso"
                        />
                    </div>
                
                    <div>
                        <SelectInput 
                            label=" a"
                            inputName="tipoPeriodo"
                            inputId="tipoPeriodo"
                            v-model="tipoPeriodoSelected"
                            :options="tipoPeriodoOptions"
                            ariaLabel="Periodo do curso"
                        />
                    </div>
                </div>

                
                
            
                <div>
                    <label for="coordenador">Coordenador do Curso</label><br>
                    <select name="coodernador" id="coodernador" required>
                        <option value="" disabled selected>Selecione o Coordenador</option>   
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
            
                <div>
                    <label>Período do Curso</label><br>
                    <div class="col-checkbox">
                        <div>
                            <input type="checkbox" name="matutino" value="matutino"> 
                            <label>Matutino</label>
                        </div>
            
                        <div>
                            <input type="checkbox" name="vespertino" value="vespertino">  
                            <label>Vespertino</label>  
                        </div>
            
                        <div>
                            <input type="checkbox" name="noturno" value="noturno"> 
                            <label>Noturno</label>         
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
</style>