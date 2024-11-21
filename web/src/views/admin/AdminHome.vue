<script>
    import Welcome from '@/components/util/Welcome.vue';
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import SearchField from '@/components/util/SearchField.vue';
    import { onMounted, ref } from 'vue';

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
                try {
                    const res = await fetch('http://localhost:3000/turmas');
                    const data = await res.json();
                    
                    // Atribui os dados recebidos ao `turmas.value`
                    turmas.value = data;
                    
                    console.log('Turmas:', turmas.value);
                } catch (error) {
                    console.error('Erro ao buscar turmas:', error);
                }
            };

            onMounted(fetchTurmas);

            return { 
                turmas 
            };
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
            <span v-if="!turmas">Carregando turmas...</span>
            <div v-else>
                <div v-for="(turma, index) in turmas" :key="index">
                    <Card 
                        :name="turma.nome"
                        routeCard="/visualizarTurma" 
                        routeEdit="/editarTurma"
                        routeDelete="/delete"
                    />
                </div>
                
                <ButtonAdd route="/admin/cadastrarTurmas"> {{labelBtnAdd}}</ButtonAdd>
            </div>
        </div>    
    </div>
</template>

<style >
      
</style>