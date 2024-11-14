<script>
    import Card from '@/components/card/Card.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import PageId from '@/components/util/PageId.vue';

    export default {
        name: 'Cursos',
        components: {Card, PageId, ButtonAdd},
        data(){
            return{
                labelBtnAdd: "Adicionar curso"
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

            <ButtonAdd 
                route="/cadastrarCursos"
            > 
                {{labelBtnAdd}}
            </ButtonAdd>
        </div>
    </div>

</template>


<style >
    
</style>