<template>
    <div class="div-welcome">
        <h2>Olá, {{ label }}</h2>
        <h2 class="h2-role">{{ role }}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            label:{
                type: String,
                default: 'Campo checkbox'
            },
            role:{
                type: String,
                default: 'Papel'
            }

        }
    }
</script>

<style>
    .div-welcome{
        display: flex;
        justify-content: space-between;
    }

    .h2-role{
        color: #ccc;
    }
</style>