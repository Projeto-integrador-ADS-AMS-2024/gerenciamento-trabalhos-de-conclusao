<script>
    import Card from '@/components/card/Card.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import PageId from '@/components/util/PageId.vue';
    import { Disciplinas } from '@/services/disciplina';
    import { onMounted, ref } from 'vue';

    export default {
        name: 'Disciplinas',
        components: {Card, PageId, ButtonAdd},
        data(){
            return{
                labelBtnAdd: "Adicionar disciplina" 
            }
        },
        setup(){
            const disciplinas = ref([]);

            const fetchDisciplinas = async () => {
                try{
                    const data = await Disciplinas.getAllDisciplinas();
                    disciplinas.value = data;
                    console.log('Disciplinas:', disciplinas.value);
                }
                catch (error){
                    console.log('Erro ao buscar disciplinas:', error)
                }
            }

            onMounted(fetchDisciplinas)

            return{
                disciplinas
            }

        }
    }
</script>

<template>     
    <div class="div-conteudo-principal">
        <div>
            <PageId 
                label="Disciplinas"
            />
        </div>
        <div>
            <div>
                <span v-if="!disciplinas">Carregando disciplinas...</span>
                <div v-else>
                    <div v-for="(disciplina, index) in disciplinas" :key="index">
                        <Card  
                            :name="disciplina.nome"
                            routeCard="/visualizarDisciplinas" 
                            routeEdit="/editarDisciplinas"
                            routeDelete="/delete"
                        />
                    </div>
                </div>

            </div>

            <ButtonAdd 
                route="/cadastrarDisciplinas"
            > 
                {{labelBtnAdd}}
            </ButtonAdd>
        </div>
    </div>

</template>


<style >
    
</style>