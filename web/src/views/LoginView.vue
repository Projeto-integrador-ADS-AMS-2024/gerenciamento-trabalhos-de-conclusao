<script setup>
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
                    <input type="email" id="email" name="email" required>
                </div>
    
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" required minlength="8">
                </div>
    
                <span class="error" ref="errorRef"></span>
    
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    position: absolute;
    
    display: flex;
    top: 50%;
    left: 50%;
    height: 55vh;
    transform: translate(-50%, -50%);
}

.div-logo-login{
    background-color: var(--bg-div-login);
    border-radius: 15px;
    width: 400px;
    display: flex;
    justify-self: center;
    align-items: center;
    
    
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 400px;
        
        img{
            width: 170px;
        }

        h1{
            color: white;
            letter-spacing: 4px;
            font-size: 24pt;
        }
    }
    
}

.div-form-login{
    background-color: #f1f1f1;
    border-radius: 15px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    margin-bottom: 1rem;
}

button {
    text-align: center;
    width: 100%;
    background-color: #004D73;
    padding: .8rem;
    border-radius: 7px;
    color: white;
    font-weight: bold;
}

button:hover {
    background-color: white;
    color: black;
    outline: 1px solid black;

    transition: .3s;
}

.error {
    font-weight: bold;
    color: red;
}

@media (max-width: 900px) {  
    .login-container{
        flex-direction: column;
    }
}

</style>