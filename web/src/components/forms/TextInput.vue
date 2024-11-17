<template>
    <div class="div-inpt">
        <label :for="id">{{ label }}</label>
        <input type="text" :name="id" :id="id" :placeholder="placeholder" v-on:blur="focusInput(id)" required/>
        <p id="infoP">{{ info }}</p>
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
            focusInput(id){
                const pValidation = document.getElementById('infoP');
                const input = document.querySelector('input'); 

                // Validate input value
                if (!input.value.trim()) { // ignora espaços
                    pValidation.style.display = 'block';
                    input.style.borderBottom = '1px solid red'; 
                } else {
                    pValidation.style.display = 'none';
                    input.style.borderBottom = '1px solid #ccc'; 
                }        
            }
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

    #infoP{
        display: none;
        color: red;
    }
</style>
  