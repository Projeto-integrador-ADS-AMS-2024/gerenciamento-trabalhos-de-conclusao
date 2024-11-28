<script setup>
import Button from '@/components/forms/Button.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute();

const errorRef = ref(null);

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const loginResponse = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        });

        const loginData = await loginResponse.json();

        if (loginData.error) {
            errorRef.value.textContent = loginData.error;
        } else {
            const token = loginData.token;

            localStorage.setItem('token', token);

            location.replace(router.query.redirect);
        }
    } catch (err) {
        console.log(err);
    }
}
</script>

<template>
    <div class="login-container">
        <div class="div-logo-login">
            <div>     
                <img src="../assets/img/logo-sgtc.svg" alt="Imagem da logo SGTC" class="img-logo">
                <h1>SGTC</h1>   
            </div>
        </div>
        <div class="div-form-login">
            <form @submit="handleSubmit">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required minlength="8">
                </div>
    
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" required minlength="8">
                </div>
    
                <span class="error" ref="errorRef"></span>
    
                <Button>Logar</Button>
            </form>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: red;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.login-container {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; /* Permite que os filhos preencham toda a altura */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    overflow: hidden;
    height: 50vh; /* Define uma altura mínima */
    min-height: 300px; /* Para evitar colapso em telas muito pequenas */
}

.div-logo-login {
    background-color: var(--bg-div-login);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 100%; /* Preenche a altura total do contêiner pai */
    box-sizing: border-box;
    padding: 20px;
}

.div-logo-login img {
    width: 150px;
    margin-bottom: 10px;
}

.div-logo-login h1 {
    color: white;
    letter-spacing: 4px;
    font-size: 24pt;
    text-align: center;
    margin: 0;
}

.div-form-login {
    background-color: #dbd9d9;
    padding: 30px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    box-sizing: border-box;
}

h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 20pt;
}

button {
    text-align: center;
    width: 100%;
    background-color: #004D73;
    padding: 10px 0;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in-out;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
    font-size: 14px;
}

input {
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 4px;
    font-size: 14px;
    color: black;
    width: 100%;
    box-sizing: border-box;
}

input:focus {
    border: 1px solid #0F62FE;
    outline: none;
    box-shadow: 0 0 5px rgba(15, 98, 254, 0.5);
    transition: 0.2s ease-in-out;
}

.error {
    font-weight: bold;
    color: red;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
}

@media (max-width: 900px) {
    .login-container {
        flex-direction: column;
        width: 90%;
        max-width: 600px;
    }

    .div-logo-login,
    .div-form-login {
        width: 100%;
        padding: 20px;
    }

    .div-logo-login img {
        width: 100px;
    }
}
</style>
