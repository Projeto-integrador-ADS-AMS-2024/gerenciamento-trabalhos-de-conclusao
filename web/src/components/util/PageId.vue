<template >
    <div>
        <h3>{{label}}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            default: 'Pagina'
        }
    }
}
</script>

<style>
    div{
        
    }
    h3{
        color: black;
        margin-bottom: 20px;
    }
</style>