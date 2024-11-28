<script>
    import Welcome from '@/components/util/Welcome.vue';
    import Card from '@/components/card/Card.vue';
    import PageId from '@/components/util/PageId.vue';
    import ButtonAdd from '@/components/util/ButtonAdd.vue';
    import SearchField from '@/components/util/SearchField.vue';
    import { onMounted, ref } from 'vue';
    import MenuTasks from '@/components/tasks-/MenuTasks.vue';

    export default {
        name: 'Home',
        components: {Welcome, Card, PageId, ButtonAdd, SearchField, MenuTasks},
        props: ['id'], // Recebe o `id` da rota
        data(){
            return{
                labelBtnAdd: 'Adicionar turma'
            }
        },
        setup(props) {
            const turma = ref(null);
            const loading = ref(true);
            const error = ref(null);

            const fetchTurma = async () => {
                try {
                    const res = await fetch(`http://localhost:3000/turmas/${props.id}`);
                    if (!res.ok) throw new Error('Erro ao buscar turma');
                    turma.value = await res.json();
                    console.log(turma.value)
                } catch (err) {
                    error.value = err.message;
                } finally {
                    loading.value = false;
                }
            };

            onMounted(fetchTurma);

            return { turma, loading, error };
        },
    }
</script>

<template>
    <div class="div-conteudo-principal">    
        <div>
            <PageId v-if="turma" :label="turma.nome" />
            <span v-else>Carregando Turma</span>
        </div>
        <div>
            <MenuTasks />
        </div>
        <div>
            <span v-if="!turma">Carregando turmas...</span>
            <div v-else>
                <div v-for="(turmas, index) in turma" :key="index">
                   
                </div>
                

            </div>
        </div>    
    </div>
</template>

<style >
      
</style>