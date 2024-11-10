<script>
    import Button from '../../components/forms/Button.vue';
    import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
    import TextInput from '../../components/forms/TextInput.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';

    export default{
        name: 'FormInputs',
        components: { Button, TextInput, SelectInput, CheckBoxInput},
        data(){
            return{
                duracao: [1,2,3,4,5,6,7,8,9,10,11,12],
                tipoPeriodo: ['Ano(s)', 'Mese(s)'],
                coordenadores: ['Jose', 'Jelton']
            }
        }
    }

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
                        id="nome"
                        label="Nome do Curso"
                        placeholder="Insira o nome do curso"            
                    />
                </div>
                
                <div class="div-flex-input">
                    <div>
                        <SelectInput 
                            id="duracao"
                            label="Duração do Curso"
                            :option=duracao

                        />
                    </div>
                    <div>
                        <SelectInput 
                            id="duracao"
                            :option=tipoPeriodo
                        />
                    </div>
                </div>

                <div>
                    <SelectInput 
                        id="coodernador"
                        label="Coordenador do Curso"
                        :option=coordenadores

                    />
                </div>

                <div class="div-flex-checkbox">
                    <div>
                        <CheckBoxInput 
                            id="matutino"
                            label="Matutino"
                        />
                    </div>
                    <div>
                        <CheckBoxInput 
                            id="vespertino"
                            label="Vespertino"
                        />
                    </div>
                    <div>
                        <CheckBoxInput 
                            id="noturno"
                            label="Noturno"
                        />
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
</style>