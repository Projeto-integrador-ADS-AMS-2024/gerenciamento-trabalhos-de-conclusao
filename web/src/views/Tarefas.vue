<script>
    import TextInput from '@/components/forms/TextInput.vue';
    import SelectInput from '@/components/forms/SelectInput.vue';
    import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
    import Button from '@/components/forms/Button.vue';
    import { Turma } from '@/services/turma';
    import { onMounted, ref } from 'vue';
    import PageId from '@/components/util/PageId.vue';
    import MenuTasks from '@/components/tasks-/MenuTasks.vue';
    import Li from '@/components/tasks-/Li.vue';
    
    export default {
        name: 'Tarefas',
        components: {TextInput, SelectInput, CheckBoxInput, Button, PageId, MenuTasks},
        setup() {
            const disciplinasOptions =  ref([1, 2, 3]);
            const cursosOptions = ref([4, 5, 6]);

            const nome = ref('');// Variável para o nome da turma
            const disciplinaId = ref(''); // Variável para a disciplina
            const cursoId = ref('') ;// Variável para o curso
            const turnos = ({ // Objeto para os turnos da turma
                matutino: false,
                vespertino: false,
                noturno: false
            });

            // const fetchCursosOptions = async () => {
            //     try {
            //         const res = await fetch('http://localhost:3000/cursos');
            //         if (!res.ok) throw new Error('Erro ao buscar cursos');
                    
            //         const data = await res.json();

            //         cursosOptions.value = data.map(curso => ({
            //             id: curso.id,
            //             // nome: curso.nome
            //         }));
            //         console.log(cursosOptions.value);
            //     } catch (error) {
            //         console.error('Erro ao carregar cursos:', error);
            //     }
            // };

            const newClass = async () => {
                try{
                    const novaTurma = {
                        nome: nome,
                        disciplinaId: disciplinaId,
                        cursoId: cursoId,
                        turno: Object.keys(turnos).filter(turno => turnos[turno])
                    }
                    // console.log(novaTurma)

                    const turmacriada = await Turma.createTurma(novaTurma);

                }
                catch(error){
                    console.log("Erro ao criar turma:", error)
                }
            };

            // // Chama a função ao montar o componente
            // onMounted(fetchCursosOptions);

            // Retorna os dados para o template
            return { 
                disciplinasOptions,cursosOptions,nome,disciplinaId,cursoId,turnos,newClass
            }
        }
    }
</script>

<template>
    <div class="div-conteudo-principal">
        <div>
            <PageId label="Tarefas" />
        </div>
        <div>        
            <MenuTasks/>
        </div>
    </div>
</template>

<style >
    .div-flex-input{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        div{
            width: 100%;
        }
    }

    .div-flex-checkbox{
        display: flex;
        gap: 20px;
    }
</style>

// data(){
    //     return{
    //         disciplinasOptions: ["PI", "TG", "TCC"],
    //         cursosOptions: cursosOptions2,

    //         nome: '', // Variável para o nome da turma
    //         disciplina: '', // Variável para a disciplina
    //         curso: '', // Variável para o curso
    //         turnos: { // Objeto para os turnos da turma
    //             matutino: false,
    //             vespertino: false,
    //             noturno: false
    //         }
    //     }
    // },
    // methods:{
    //     async newClass(){
    //         try{
    //             const novaTurma = {
    //                 nome: this.nome,
    //                 disciplina: this.disciplina,
    //                 curso: this.curso,
    //                 turno: Object.keys(this.turnos).filter(turno => this.turnos[turno])
    //             }
    //             console.log(novaTurma)

    //             const turmacriada = await Turma.createTurma(novaTurma);

    //         }
    //         catch(error){
    //             console.log("Erro ao criar turma:", error)
    //         }
    //     }
    // },