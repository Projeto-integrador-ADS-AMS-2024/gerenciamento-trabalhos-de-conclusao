<script>
    import Welcome from '@/components/util/Welcome.vue';
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import SearchField from '@/components/util/SearchField.vue';
    import { onMounted, ref } from 'vue';
    import { Turma } from '@/services/turma.js';

    export default {
        name: 'Home',
        components: {Welcome, Card, PageId, ButtonAdd, SearchField},
        data(){
            return{
                labelBtnAdd: 'Adicionar turma'
            }
        },
        setup() {
            const turmas = ref([]); // Inicializa o array de turmas
         
            const fetchTurmas = async () => {
                try{
                    const data = await Turma.getAllTurmas();
                    turmas.value = data;
                    console.log('Turmas carregadas:', turmas.value);
                }
                catch(error){
                    console.error('Erro ao carregar turmas:', error);
                }
            }

            // Chama a função ao montar o componente
            onMounted(fetchTurmas)

            // Retorna os dados para o template
            return { turmas };
        }
    }
</script>

<template>
    <div class="div-conteudo-principal">
        <div>
            <Welcome label="Administrador" />
        </div>
        <div>
            <PageId label="Turmas" />
        </div>
        <div>
            <SearchField />
        </div>
        <div>
            <span v-if="turmas.length === 0">Carregando turmas...</span>

            <div v-else>
                <div v-for="(turma, index) in turmas" :key="index">
                    <Card 
                        :name="turma.nome"
                        routeCard="/visualizarTurma" 
                        routeEdit="/editarTurma"
                        routeDelete="/delete"
                    />
                </div>
                
                <ButtonAdd route="/cadastrarTurmas"> {{labelBtnAdd}}</ButtonAdd>
            </div>
        </div>    
    </div>
</template>
<style >
      
</style>