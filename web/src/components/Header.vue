<template>
    <header>
        <div class="div-acessibilidade">
            <ul>
                <li>
                    <div>
                        Alto Contraste
                        <input type="checkbox" v-model="toggle" id="toggle" name="toggle" class="toggle">
                        <label for="toggle"></label>
                    </div>
                </li>
                <li>
                    <div>Atalhos para conteudo</div>
                </li>
                <li>
                    <div>Menu</div>
                </li>
                <li>
                    <div>Busca</div>
                </li>
            </ul>
        </div>
        <!-- <nav class="menu">
            <router-link to="/" class="router-link">
                <div class="div-logo">     
                    <img src="../assets/img/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                    <h1>SGTC</h1>   
                </div>
            </router-link> 
            <router-link to="/" class="user-logo">
                <div>
                    <img src="../assets/img/user-group.svg" alt="Foto de perfil do usuário" class="img-user">
                </div>
            </router-link>
        </nav> -->
    </header>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const toggle = ref(false)

    watch(toggle, (newVal) => {
        const html = document.querySelector('html')
        if (newVal) {
            html.classList.add('dark-mode')
        } else {
            html.classList.remove('dark-mode')
        }
    })

</script>

<style scoped>
    header{
        display: flex; 
        flex-direction: column;
        
        .div-acessibilidade{
            padding: 0.2rem;
            background-color: var(--bg-div-acessibilidade);
            
            ul{
                flex-wrap: wrap;
                display: flex;   
                justify-content: space-around;
                align-items: center; 
   
                li{
                    div{  
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }     
                }
            }

            .toggle{
                display: none;
            }

            .toggle + label{
                width: 32px;
                height: 24px;
                background: lightgrey;
                display: block;
                position: relative;
                border-radius: 20px;
                padding: 2px;
                transition: 200ms;
                cursor: pointer;
            }

            .toggle + label:before{
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                background: white;
                display: block;
                border-radius: 50%;
                right: unset;
                left: 2px;
                top: 2px;
                transition: 200ms;
            }

            .toggle:checked + label{
                background: blue;
            }

            .toggle:checked + label:before{
                content: '';
                left: calc(100% - 22px);
                box-shadow: 0 4px 4px rgb(000 / 10%);
            }
        }

        .menu{
            background-color: var(--div-menu-bg);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);           
        }
    }

    .div-logo{
        display: flex;
        align-items: center;
        color: var(--font-logo);
        gap: 15px;
    }

    .img-logo{
        width: 90px;
    }

    .user-logo{
        text-decoration: none;
        .img-user {
            width: 34px;
            padding: 2px;
            border-radius: 25px;
            border: 1px solid rgb(255, 255, 255);
        }
        
    }
</style>