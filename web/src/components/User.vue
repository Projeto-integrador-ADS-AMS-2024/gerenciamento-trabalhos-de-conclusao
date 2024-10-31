<script setup>
defineProps({
    user: Object
})

</script>

<template>
<tr>
    <td>{{ user.ra || user.matricula }}</td>
    <td>{{ user.nome }}</td>
    <td>{{ user.cpf }}</td>
    <td>{{ user.email }}</td>
</tr>
</template>

<style scoped>
</style>