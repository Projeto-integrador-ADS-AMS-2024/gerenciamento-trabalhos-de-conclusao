<template>
    <router-link :to="route">
        <button>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <slot />
            </div>
        </button>
    </router-link>
</template>

<script>
    export default {
        props:{
            route:{
                type: String,
                default: '/rota'
            }
        }
    }
</script>

<style scoped>
    button{
        color: #ccc;
        div{
            display: flex;
            align-items: center;
            gap: 10px;

            svg{
                width: 34px;
                height: auto;
            }
        }
    }
    button:hover{
        color: black;
    }
</style>