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
        <nav class="menu" id="menu-superior">
            <RouterLink to="/">
                <div class="div-logo">     
                    <img src="./assets/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                    <h1>SGTC</h1>   
                </div>
            </RouterLink> 
            <RouterLink to="/" class="user-logo">
                <img src="./assets/user.png" alt="Foto de perfil do usuário" class="img-user">
            </RouterLink>
        </nav>
    <nav>

      <RouterLink to="/cursos">Cursos</RouterLink>
    </nav>
  </header>

  <main>
    <!-- Renderiza o conteúdo das outras rotas -->
    <RouterView />
  </main>
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

img {
  width: 50px;
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