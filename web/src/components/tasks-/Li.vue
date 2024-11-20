<script>
    export default {
        props:{
            label:{
                type: String,
                default: 'Menu 1'
            }
        }
    }
</script>

<template>
    <div>
        <router-link class="router-link">
            <li>{{ label }}</li>       
        </router-link>     
    </div>
</template>

<style>  
    nav{
        
        ul{
            display: flex;
            gap: 30px;
            
        }
    }
</style>