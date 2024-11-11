<script>
    import Welcome from '@/components/util/Welcome.vue';
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import SearchField from '@/components/util/SearchField.vue';

    export default {
        name: 'Home',
        components: {Welcome, Card, PageId, ButtonAdd, SearchField},
        data(){
            return{
                labelBtnAdd: 'Adicionar turma'
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
            <SearchField />
        </div>
        <div>
            <Card
                name="nome do Turma"
                routeCard="/visualizarTurma" 
                routeEdit="/editarTurma"
                routeDelete="/delete"
            />

            <ButtonAdd 
                
            > 
                {{labelBtnAdd}}
            </ButtonAdd>
        </div>
    </div>
</template>
<style >
    
</style>