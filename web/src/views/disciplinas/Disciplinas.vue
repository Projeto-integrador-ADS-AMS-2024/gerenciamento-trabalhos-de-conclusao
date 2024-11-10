<script>
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';

    export default {
        name: 'Disciplinas',
        components: {Card, PageId},
        data(){
            return{

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
        </div>
    </div>

</template>


<style >
    
</style>