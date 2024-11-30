<template>
    <div class="select-container">
        <label :for="id">{{ label }}</label>
        <select
            :id="id"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option value="" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>
  
<script>
export default {
    props: {
        id: String,
        label: String,
        placeholder: String,
        modelValue: [String, Number],
        options: {
            type: Array,
            required: true,
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
  