<script>
    import Welcome from '@/components/util/Welcome.vue';
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';

    export default {
        name: 'Home',
        components: {Welcome, Card, PageId},
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="div-conteudo-principal">
        <div>
            <Welcome 
                label="Administrador"
            />
        </div>
        <div>
            <PageId label="Turmas" />
        </div>
        <div>
            <Card
                name="nome do Turma"
                routeCard="/visualizarTurma" 
                routeEdit="/editarTurma"
                routeDelete="/delete"
            />
        </div>
    </div>
</template>
<style >
    
</style>