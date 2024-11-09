<template>
    <div>
        <label :for="inputId">{{ label }}</label>
        <input
            type="text"
            :name="inputName"
            :id="inputId"
            :aria-label="ariaLabel"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
  
<script setup>
    defineProps({
        label: String,
        inputName: String,
        inputId: String,
        ariaLabel: String,
        modelValue: String, // Aqui recebemos o valor através do v-model
    });
</script>
  
  
<style>
    input{
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
    }
</style>
  