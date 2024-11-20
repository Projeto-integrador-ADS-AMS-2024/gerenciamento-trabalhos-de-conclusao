<script>
    import Card from '@/components/card/Card.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import PageId from '@/components/util/PageId.vue';
    import { Curso } from '@/services/curso';
    import { onMounted, ref } from 'vue';

    export default {
        name: 'Cursos',
        components: {Card, PageId, ButtonAdd},
        data(){
            return{
                labelBtnAdd: "Adicionar curso"
            }
        },
        setup(){
            const cursos = ref([]);

            const fetchCursos = async () => {
                try {
                    const data = await Curso.getAllCursos()
                    cursos.value = data;

                    console.log('Cursos:', cursos.value);
                }   
                catch(error){
                    console.log('Erro ao buscar os cursos: ', error);
                }
            }

            onMounted(fetchCursos);

            return { cursos }
        }
    }
</script>

<template>     
    <div class="div-conteudo-principal">
        <div>
            <PageId label="Cursos" />
        </div>
        <div>
            <span v-if="!cursos">Carregando cursos...</span>
            <div v-else>
                <div v-for="(curso, index) in cursos" :key="index">
                    <Card 
                        :name="curso.nome" 
                        routeCard="/visualizarCurso" 
                        routeEdit="/editarCurso" 
                        routeDelete="/delete"
                    />
                </div>
            </div>

            <ButtonAdd route="/cadastrarCursos"> {{labelBtnAdd}}</ButtonAdd>
        </div>
    </div>

</template>

<style >
    
</style>