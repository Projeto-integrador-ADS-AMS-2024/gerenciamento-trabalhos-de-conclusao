<template>
    <div class="div-inpt">
        <label :for="id">{{ label }}</label>
        <input type="password" @input="$emit('update:modelValue', $event.target.value)" :name="id" :id="id" :placeholder="placeholder" required/>
        <p class="info">{{ info }}</p>
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
            },
            placeholder:{
                type: String,
                default: 'Placeholder do campo'
            },
            info:{
                type: String,
                default: 'info'
            }
        },
        methods:{

        }
    }
</script>
  
<style scoped>
    .div-inpt{
        margin-bottom: 20px;
    }
    input{
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
        color: black;
        margin-bottom: 10px;
    }

    .info{
        display: none;
    }
</style>
  