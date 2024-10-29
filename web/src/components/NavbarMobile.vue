<template >
    <nav>
        <div class="div-icon-menu">
            <button @click="toggleSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>
        </div>
        
        <div v-if="isSidebarOpen" class="sidebar">        
            <button @click="toggleSidebar" class="close-button">Fechar</button>
        </div>

        <!-- <div v-if="isSidebarOpen"   class="overlay" @click="toggleSidebar"></div> -->
            
        <div class="div-juncao-logo-navb">
            <img src="../assets/img/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
            <h1>SGTC</h1>
        </div>
    </nav>
</template> 

<script>
    export default {
        data() {
            return {
                isSidebarOpen: false
            };
        },
        methods: {
            toggleSidebar() {
                this.isSidebarOpen = !this.isSidebarOpen;
            }
        }
    }
</script>

<style scoped>

    nav{
        background-color: var(--bg-div-logo-aside);
        padding: 20px;
        display: none;
        justify-content: space-between;
        align-items: center ;

        img{
            width: 80px;
        }

        h1{
            color: white;
        }

        .div-juncao-logo-navb{
            display: flex;
            align-items: center ;
            gap: 10px;
        }

        .div-icon-menu{
            button{
                border: none;
                cursor: pointer;
                background-color: transparent;
                width: 60px;
                color: var(--font-logo);
            }
        }
    }

    @media (max-width: 700px) {  
        nav{
            display: flex;
        }
    }

    /* Estilo para o botão de alternância */
    .toggle-button {
        padding: 10px 20px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
    }

    /* Estilo para a sidebar */
    .sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 300px;
        height: 100%;
        background-color: #f8f9fa;
        padding: 20px;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
        z-index: 1001;
        transition: transform 0.3s ease;
    }

    /* Estilo para o botão de fechar */
    .close-button {
        margin-top: 20px;
        padding: 8px 16px;
        cursor: pointer;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
    }

    /* Estilo para o overlay */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
</style>
<!-- 
<script>

</script>

<style >
    nav{
        background-color: var(--bg-div-logo-aside);
        padding: 20px;
        display: none;
        justify-content: space-between;
        align-items: center ;

        img{
            width: 80px;
        }

        h1{
            color: white;
        }

        .div-juncao-logo-navb{
            display: flex;
            align-items: center ;
            gap: 10px;
        }

        .div-icon-menu{
            button{
                border: none;
                cursor: pointer;
                background-color: transparent;
                width: 60px;
                color: var(--font-logo);
            }
        }
    }

    @media (max-width: 700px) {  
        nav{
            display: flex;
        }
    }
</style> -->