<script>
    export default{
        props:{
            id:{
                type: String,
                default: 'id_select'
            },
            label:{
                type: String,
                default: 'Campo Select'
            },
            option:{
                type: Array,
                default: () => []
            }
            
        }
    }
</script>

<template>
    <label :for="id">{{ label }}</label>
    <select :name="id" id="id">
        <option v-for="(item, index) in option" :key="index" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<style scoped>
    select {
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 20px;
    }
</style>
