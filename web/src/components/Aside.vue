<template>
    <aside>   
        <div class="div-logo-aside">
            <!-- <router-link  class="router-link"> -->
            <div>     
                <img src="../assets/img/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                <h1>SGTC</h1>   
            </div>
            <!-- </router-link>  -->
        </div>
        <div class="div-opcoes-menus-aside" >
            <router-link to="/" class="router-link" id="menu-aside"> 
                <div>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de um usuário</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <!-- <img src="../assets/img/user-gear.svg" alt="Ferramenta Usuários" > -->
                    <p>Usuários</p>
                </div>
            </router-link>

            <router-link to="/cursos" class="router-link"> 
                <div>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de um chapéu de formatura</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <!-- <img src="../assets/img/graduation-cap.svg" alt="Ferramenta Cursos" > -->
                    <p>Cursos</p>
                </div>
            </router-link>             

            <router-link to="/turmas" class="router-link"> 
                <div>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de um grupo de 3 usuários</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <!-- <img src="../assets/img//users-rectangle.svg" alt="Ferramenta Turmas" > -->
                    <p>Turmas</p>
                </div>
            </router-link>

            <router-link to="/disciplinas" class="router-link"> 
                <div>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <title>Icone de um livro aberto</title>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>

                    <!-- <img src="../assets/img/book-solid.svg" alt="Ferramenta Disciplinas" > -->
                    <p>Disciplinas</p>
                </div>
            </router-link>

        </div>
        <div class="div-footer-aside">
            <div>
                <router-link to="/" class="router-link"> 
                    <div>
                        <!-- <img src="../assets/img/user-gear.svg" alt="Ferramenta Usuários" > -->
                        <p>Sair</p>
                    </div>
                </router-link>

            </div>
        </div>
    </aside>
</template>

<script>
    document.addEventListener('keydown', (event) => {
        if (event.key === '2') {
            window.location.href = '#menu-aside'; // Redireciona para a seção "Início"
        } 
    });
</script>

<style scoped>    
    aside{   /* Menu sidebar */
        display: flex;
        flex-direction: column;
        width: 240px; 
        padding: 15px;
        border-radius: 10px;
        gap: 10px;
        transition: all 0.3s ease; 
        /* height: 100vh; */
        /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1); */
    }

    .img-logo{
        width: 80px;
    }

    .div-logo-aside { /* Div que contem a logo com fundo azul */
        display: flex; 
        align-items: center; 
        justify-content: center; 
        box-sizing: border-box;
        background-color: var(--bg-div-logo-aside);
        width: 100%;
        border-radius: 10px;
        height: 25vh;
              
        h1{
            color: white;
        }

        div {
            gap: 5px;
            display: flex;
            align-items: center;
        }
    }

    .div-opcoes-menus-aside{ /* Div que contem os links para navegacao */
        display: flex;
        flex-direction: column;
        gap: 10px;

        .router-link{
            border-radius: 10px;
            background-color: var(--bg-option-menu);
            

                svg{
                    color: var(--font-color-p-menu);
                }
        }

        .router-link-active{
            color: var(--font-color-p-menu);
            border-radius: 10px;
            background-color: var(--bg-option-menu-active);
            p{
                color: var(--link-color-p);
            }

            svg{
                color: white;
            }
        }


        div{
            display: flex;
            align-items: center;
            /* background-color: #b91919; */
            border-radius: 10px;
            padding: 15px;
            gap: 15px;
            

            svg,img{
                width: 35px;
            }
        }

        p{
            color: var(--link-color);
        }
    }
    

    

    .div-footer-aside { /* Div que fica no final da sidebar */
        display: flex;
        align-items: end;
        justify-content: center;
        flex: 1;
        padding: 30px;
        background-color: #f1f1f1;
        border-radius: 10px;
        /* border: 1px solid black; */
        background-color: var(--bg-footer-aside);
    }

    

    @media (max-width: 800px) {  
        aside {
            width: 20vw;
        }

        .div-logo-aside {
            height: 15vh;
            div{
                flex-direction: column;    
            }
            
            img{
                width: 40px;
            }
            /* height: auto; 
            width: 90%; */
        }

        .div-opcoes-menus-aside{ /* Div que contem os links para navegacao */         
            div{
                flex-direction: column;          
            }
        }

        .div-footer-aside {

        }

    }

    @media (max-width: 700px) {  
        aside{
            display: none;
        }

        .div-logo-aside {

        }

        .div-opcoes-menus-aside {

        }

        .div-footer-aside {

        }
    }
</style>