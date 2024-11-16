
<script>
    import Button from '@/components/forms/Button.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';
    import TextInput from '@/components/forms/TextInput.vue';

    export default {
        name: 'CadastrarDisciplinas',
        components:{Button, SelectInput, TextInput},
        data(){
            return{
                coordenadores: ['jailton', 'uel']
            }
        }
    }
</script>
<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/disciplinas" class="router-link">Disciplinas</router-link> > <router-link to="/cadastrarDisciplinas" class="router-link">Cadastrar Disciplinas</router-link></h2>
        </div>
        <div>        
            <form action="turma.html">
                <div>
                    <TextInput 
                        id="nome"
                        label="Nome da Disciplina"
                        placeholder="Insira o nome da disciplina"
                    />
                </div>

                <div>
                    <SelectInput 
                        id="coodernador"
                        label="Coordenador do Curso"
                        :option=coordenadores

                    />
                </div>
                          
                <Button>Cadastrar Disciplina</Button>
            </form>
        </div>
    </div>
</template>

<style >
    
</style>