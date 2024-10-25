<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <!-- Conteúdo padrão em todas as rotas -->
    <header>
        <div class="div-acessibilidade">
            <ul>
                <li>
                    <div>
                        Contraste
                        <input type="checkbox" id="toggle" name="toggle" class="toggle">
                        <label for="toggle"></label>
                    </div>
                </li>
                <li>
                    <div>acessibilidade 2</div>
                </li>
                <li>
                    <div>acessibilidade 3</div>
                </li>
            </ul>
        </div>
        <nav class="menu">
            <RouterLink to="/">
                <div class="div-logo">     
                    <img src="./assets/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                    <h1>SGTC</h1>   
                </div>
            </RouterLink> 
            <RouterLink to="/" class="user-logo">
                <div>
                    <img src="./assets/user-group.svg" alt="Foto de perfil do usuário" class="img-user">
                </div>
            </RouterLink>
        </nav>
        <nav>
            <RouterLink to="/cursos">Cursos</RouterLink>
        </nav>
    </header>
    <div class="container">
        <aside>   
            <ul>
                <li>
                    <a href="homeAdmin.html"> 
                        <img src="./assets/user-gear.svg" alt="Ferramenta Usuários" >
                        <p>Usuários</p>
                    </a>
                </li>
                <li>
                    <a href="cursos.html"> 
                        <img src="./assets/graduation-cap.svg" alt="Ferramenta Cursos" >
                        <p>Cursos</p>
                    </a>
                </li>
                <li>
                    <a href="turmas.html"> 
                        <img src="./assets//users-rectangle.svg" alt="Ferramenta Turmas" >
                        <p>Turmas</p>
                    </a>
                </li>
                <li>
                    <a href="disciplinas.html"> 
                        <img src="./assets/book-solid.svg" alt="Ferramenta Disciplinas" >
                        <p>Disciplinas</p>
                    </a>
                </li>
            </ul>
        </aside>
        <main>
            <h2>Ferramentas > <a href="homeAdmin.html">Usuários</a></h2>
            <div class="div-cards">
                <a href="visualizarUsuarios.html">
                    <div class="card">
                        <img src="./assets/user-group.svg" alt="Visualizar Usuários" >
                        <div>
                            <span>Visualizar Usuários</span>                    
                        </div>
                    </div>
                </a>

                <a href="cadastrarUsuarios.html">
                    <div class="card">
                        <img src="./assets/add-user.svg" alt="Adicionar Usuários" >
                        <div>
                            <span>Cadastrar Usuários</span>                     
                        </div>
                    </div>
                </a>

                <a href="importarUsuarios.html">
                    <div class="card">
                        <img src="./assets/upload.svg" alt="Importar Usuários" >
                        <div>
                            <span>Importar Usuários</span>
                        </div>
                    </div>
                </a>
                
                <!-- Renderiza o conteúdo das outras rotas -->
                <RouterView />

            </div>
        </main>
    </div>
</template>

<style scoped>
    header {
        display: flex; 
        flex-direction: column;
    
        .div-acessibilidade{
            display: flex;
            background-color: var(--div-acessibilidade-bg);
                    
            ul{
                display: flex;   
                align-items: center;

                li{
                    justify-content:space-between ;
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
                height: 25px;
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
            background-color: var(--menu-bg);
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
        color: white;
        gap: 15px;
    }

    .img-logo{
        width: 90px;
    }

    .user-logo{
        .img-user {
            width: 34px;
            padding: 2px;
            border-radius: 25px;
            border: 1px solid rgb(255, 255, 255);
        }
        
    }

    .container{
        display: flex; 
        height: 100vh; 

        main{
            flex: 1; 
            padding: 20px; 
        
            h2{
                margin-bottom: 10px;
            }
        
            a{
                color: black;
            }
        
            a:visited {
                color: black; /* Mesma cor do link normal */
            }

        }
    }
 
    aside{   
        width: 110px; 
        height: 100vh;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
        color: rgb(228, 47, 47); 
        padding: 20px;
        
        ul{
            text-align: center;
            li{
                margin-bottom: 24px;
                p{
                    color: black;
                }
            }
        }
        
        img{
            width: 40px;
        }
    
    }

    
.div-cards{
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    display: flex;
    box-shadow: 0px 4px 8px rgba(2, 2, 2, 0.3);
    margin-bottom: 1rem;
    border-radius: 10px;
    gap: 2.5rem;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 20px;

    img{
        width: 150px;
        height: auto;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem; 
        padding: auto;

        span {
            font-size: 1.5rem; 
            font-weight: bold; 
        }
    }
}  
</style>








<!-- <!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SGTC</title>

    {{!-- CSS --}}
    <link rel="stylesheet" href="../../public/css/style.css">
</head>

<body>
    <header>
        <div class="div-acessibilidade">
            <ul>
                <li>
                    <div>
                        Contraste
                        <input type="checkbox" id="toggle" name="toggle" class="toggle">
                        <label for="toggle"></label>
                    </div>
                </li>
                <li>
                    <div>
                        acessibilidade 2
                    </div>
                </li>

                <li>
                    <div>
                        acessibilidade 3
                    </div>
                </li>


            </ul>
        </div>
        <div class="menu" id="menu-superior">
            <a href="/">
                <div class="div-logo">     
                    <img src="./assets/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                    <h1>SGTC</h1>   
                </div>
            </a> 
            <a href="#" class="user-logo">
                <img src="./assets/user.png" alt="Foto de perfil do usuário" class="img-user">
            </a>

        </div>
    </header>
    <div class="container">
        <aside>   
            <ul>
                <li>
                    <a href="/"> 
                        <img src="./assets/user-gear.svg" alt="Ferramenta Usuários" >
                        <p>Usuários</p>
                    </a>
                </li>
                <li>
                    <a href="/pageCursos"> 
                        <img src="./assets/graduation-cap.svg" alt="Ferramenta Cursos" >
                        <p>Cursos</p>
                    </a>
                </li>
                <li>
                    <a href="/pageTurmas"> 
                        <img src="./assets/users-rectangle.svg" alt="Ferramenta Turmas" >
                        <p>Turmas</p>
                    </a>
                </li>
                <li>
                    <a href="/pageDisciplinas"> 
                        <img src="./assets/book-solid.svg" alt="Ferramenta Disciplinas" >
                        <p>Disciplinas</p>
                    </a>
                </li>
            </ul>
        </aside>
        <main>
            <div vw class="enabled">
                <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            {{!-- script para plugin vlibras --}}
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>

            {{!-- script para acessibilidade toggle --}}
            <script src="../../public/js/main/toggle.js"></script>




            
        </main>
    </div>
</body>

</html> -->