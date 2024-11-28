<script setup>
defineProps({
    user: Object
})
</script>
<template>
        <tr>       
            <td><router-link>{{ user.ra || user.matricula }}</router-link></td>
            <td><router-link>{{ user.nome }}</router-link></td>
            <td><router-link>{{ user.cpf }}</router-link></td>
            <td><router-link>{{ user.email }}</router-link></td>
        </tr>
</template>

<style scoped>

</style>