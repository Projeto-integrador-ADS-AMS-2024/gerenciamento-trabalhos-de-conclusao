<script>
    import TextInput from '@/components/forms/TextInput.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';
    import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
    import Button from '@/components/forms/Button.vue';
    
    export default {
        name: 'CadastrarTurmas',
        components: {TextInput, SelectInput, CheckBoxInput, Button},
        data(){
            return{
                disciplinasOptions: ["PI", "TG", "TCC"],
                cursosOptions: ['ADS', 'AMS-ADS', 'LOG']
            }
        }
    }
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/turmas" class="router-link">Turmas</router-link> > <router-link to="/cadastrarTurmas" class="router-link">Cadastrar Turmas</router-link></h2>
        </div>
        <div>        
            <form action="turma.html">
                <!-- Nome da Turma -->
                <div>
                    <TextInput id="nome" label="Nome da Turma" placeholder="Insira o nome da turma"            
                    @blur="focusInput(id)" info="Preencha corretamente este campo!"/>
                </div>
                
                <!-- Disciplina -->
                <div>
                    <SelectInput
                        id="disciplina"
                        label="Disciplina da Turma"
                        :options="disciplinasOptions"
                        placeholder="Selecionar..."
                    />
                </div>

                <!-- Curso -->
                <div>
                    <SelectInput 
                        id="curso" 
                        label="Curso da Turma" 
                        :options=cursosOptions 
                        placeholder="Selecionar..."
                    />
                </div>

                <!-- Turno da turma -->
                <div>
                    <label>Turno da Turma</label><br>
                    <div class="div-flex-checkbox">
                        <div>
                            <CheckBoxInput id="matutino" label="Matutino" />
                        </div>
                        <div>
                            <CheckBoxInput id="vespertino" label="Vespertino" />
                        </div>
                        <div>
                            <CheckBoxInput id="noturno" label="Noturno"/>
                        </div>
                    </div>
                </div>
                <Button>Cadastrar Turma</Button>
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
</style>