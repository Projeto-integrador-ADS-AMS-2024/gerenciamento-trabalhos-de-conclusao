<script setup>
const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Enviado");
}
</script>

<template>
    <div class="login-container">
        <h1>Login</h1>

        <form @submit="handleSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" required minlength="8">
            </div>

            <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
.login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
</style>