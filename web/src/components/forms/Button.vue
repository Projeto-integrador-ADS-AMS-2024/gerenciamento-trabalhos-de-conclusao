<template>
    <div class="div-btn">
        <button type="submit">
            <div>
                <slot>Botão Padrão</slot>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </button>
    </div>
    
</template>
  
<script>
    export default {

    };
</script>

<style scoped>
    .div-btn {
        text-align: center; 
        color: white;
    }

    button {
        background-color: #0F62FE;
        padding: 10px;
        width: 100%;
        border-radius: 4px;
        font-size: 14pt;
        text-align: left;
        border: none;
        
        div{
            display: flex;
            justify-content: space-between;
        }

        svg{
            width: 24px;
            height: auto;
        }
    }

    button:hover {
        opacity: 0.8;
    }
</style>
  