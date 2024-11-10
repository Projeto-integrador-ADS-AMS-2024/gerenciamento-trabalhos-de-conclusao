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
                        <router-link :to=routeEdit class="router-link">Editar</router-link>
                    </button>
                    <button>
                        <router-link :to=routeDelete class="router-link">Excluir</router-link>
                    </button>
                </div>
                <div class="div-info">
                    <!-- <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de um grupo de 3 usuários</title>      
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg> -->
                    <span>{{name}}</span>                    
                </div>
            </div>
        </router-link>     
    </div>
</template>


<style>
    .div-cards{
        /* display: flex; */
        /* align-items: center; 
        justify-content: center; */
        /* flex-wrap: wrap;
        gap: 20px; */
    }
    
    .card {
        display: flex;
        width: 100%;
        /* box-shadow: 0px 4px 8px var(--box-shadow-color); */
        border-radius: 4px;
        border: 1px solid #0F62FE;
        flex-direction: column;
        padding: 20px; 
        

        .div-info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem; 
            padding: auto;
            /* align-items: center; */
            /* text-align: center; */
            
            img, svg {
                width: 80px;
                height: auto;
                color: var(--font-color-p-menu);
            }

            span {
                font-size: 1.2rem; 
                /* font-weight: bold;  */
            }
        }
    
    } 

    .div-funcoes-card {
        display: flex;
        gap: 0.5rem; 
        justify-content: flex-end;
    }
</style>