<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input type="date" :name="id" :id="id" :placeholder="placeholder"/>
    </div>
</template>
  
<script>
    export default {
        props:{
            id: {
                type: String,
                default: 'id_text'
            },
            label: {
                type: String,
                default: 'Nome Campo'
            }
        }
    }
</script>
   
<style scoped>
    input{
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
        color: black;
        margin-bottom: 20px;
    }
</style>
  