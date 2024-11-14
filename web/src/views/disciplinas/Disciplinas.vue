<script>
    import Card from '@/components/card/Card.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import PageId from '@/components/util/PageId.vue';

    export default {
        name: 'Disciplinas',
        components: {Card, PageId, ButtonAdd},
        data(){
            return{
                labelBtnAdd: "Adicionar disciplina" 
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
            <Card 
                name="nome do Disciplinas"
                routeCard="/visualizarDisciplinas" 
                routeEdit="/editarDisciplinas"
                routeDelete="/delete"
            />

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