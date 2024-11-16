<template>
    <div class="select-container">
        <label :for="id">{{ label }}</label>
        <select :id="id" :value="modelValue" @change="handleChange">
            <!-- Placeholder Option -->
            <option value="" disabled selected>{{ placeholder }}</option>
            
            <!-- Opções -->
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>
  
<script setup>
    defineProps({
        id: String,
        label: String,
        modelValue: String,
        options: Array,
        placeholder: {
            type: String,
            default: 'Selecionar...'
        }
        }
    );

    // Emite o valor selecionado para o componente pai
    const emit = defineEmits(['update:modelValue']);

    function handleChange(event) {
        emit('update:modelValue', event.target.value);
    }
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
  