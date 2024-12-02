<template>
    <div class="select-container">
        <label :for="id">{{ label }}</label>
        <select
            :id="id"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option value="" disabled>{{ placeholder }}</option>
            <!-- Renderiza as opções -->
            <option
                v-for="option in options"
                :key="getOptionKey(option)"
                :value="getOptionValue(option)"
            >
                {{ getOptionLabel(option) }}
            </option>
        </select>
    </div>
</template>
  
<script>
    export default {
        props: {
            id: { type: String, required: true },
            label: { type: String, required: true },
            modelValue: { required: true },
            options: { 
                type: Array, 
                default: () => [] 
            }, // Pode ser um array de strings/números ou objetos
            placeholder: { 
                type: String, 
                default: 'Selecionar...' 
            },
        },
        methods: {
            // Determina o valor para o atributo "value"
            getOptionValue(option) {
                return typeof option === 'object' ? option.id : option;
            },
            // Determina o rótulo exibido no <option>
            getOptionLabel(option) {
                return typeof option === 'object' ? option.nome : option;
            },
            // Determina a chave única para o v-for
            getOptionKey(option) {
                return typeof option === 'object' ? option.id : option;
            },
        },
    };
</script>
  
<style scoped>
    .select-container {
        margin-bottom: 20px;
    }

    select {
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 100%;
    }

    option[disabled] {
        color: #aaa;
    }
</style>
  