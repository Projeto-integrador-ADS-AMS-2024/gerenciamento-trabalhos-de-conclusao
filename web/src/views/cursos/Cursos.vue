<script>
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';

    export default {
        name: 'Cursos',
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
                label="Cursos"
            />
        </div>
        <div>
            <Card 
                name="nome do Curso"
                routeCard="/visualizarCurso" 
                routeEdit="/editarCurso"
                routeDelete="/delete"
            />
        </div>
    </div>

</template>


<style >
    
</style>