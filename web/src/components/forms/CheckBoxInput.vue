<template>
    <div class="col-checkbox">
        <div>
            <input 
                type="checkbox" 
                :name="id" 
                :id="id" 
                :value="value" 
                :checked="isChecked" 
                @change="updateTurnos"> 
            <label :for="id">{{ label }}</label>
        </div>                         
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: 'id_checkbox'
        },
        label: {
            type: String,
            default: 'Campo checkbox'
        },
        value: {
            type: String,
            required: true
        },
        turnos: {
            type: Array,
            default: () => [] // Deve ser uma função que retorna um array
        }
    },
    computed: {
        isChecked() {
            return this.turnos.includes(this.value);
        }
    },
    methods: {
        updateTurnos(event) {
            const checked = event.target.checked;

            // Emite um evento para o componente pai
            this.$emit('update:turnos', 
                checked 
                    ? [...this.turnos, this.value] 
                    : this.turnos.filter(turno => turno !== this.value)
            );
        }
    }
};
</script>


<style scoped>
    .col-checkbox {
        display: flex;
        flex-wrap: wrap; /* Permite que os elementos quebrem de linha */
        gap: 20px; /* Espaço entre os campos */
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 20px;

        div {
            display: flex;
            input[type="checkbox"] {
                transform: scale(1.5);
                border: 1px solid #ccc;
                margin-right: 20px; 
            } 
        } 
    };
</style>