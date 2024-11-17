<script>
    export default {
        props:{
            routeCard:{
                type: String,
                default: '/rotaCard'
            },
            routeEdit:{
                type: String,
                default: '/rotaEdit'
            },
            routeDelete:{
                type: String,
                default: '/rotaDelete'
            },
            name:{
                type: String,
                default: 'Nome'
            }
        }
    }
</script>

<template>
    <div>
        <router-link :to="routeCard" class="router-link">
            <div class="card">
                <div class="div-funcoes-card">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </button>
                </div>
                <div class="div-info">
                    <span>{{name}}</span>                    
                </div>
            </div>
        </router-link>     
    </div>
</template>

<style>  
    .card {
        display: flex;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #0F62FE;
        flex-direction: column;
        padding: 20px; 
        margin-bottom: 24px;
        

        .div-info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem; 
            padding: auto;
            
            img, svg {
                width: 80px;
                height: auto;
                color: var(--font-color-p-menu);
            }

            span {
                font-size: 1.2rem; 
            }
        }
    
    } 

    .div-funcoes-card {
        display: flex;
        gap: 0.5rem; 
        justify-content: flex-end;

        svg{
            width: 26px;
            height: auto;
        }
    }
</style>