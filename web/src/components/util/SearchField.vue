<template>
    <div class="div-filtro">
        <input :name="id" :id="id" :placeholder="placeholder"
        />
        <div class="div-icon-pesquisa">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <title>Icone de uma bússola</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
    </div>
</template>


<script>
    export default {
        props:{
            id:{
                type: String,
                default: 'id_search'
            },
            placeholder:{
                type: String,
                default: 'Placeholder'
            }
        }
    }
</script>

<style>
    input{
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
        color: black;
        margin-bottom: 20px;
    }

    .div-filtro {
        display: flex;
        width: 100%;
        gap: 10px;
        align-items: center;
        justify-items: center;

        img, svg {
            width: 32px;
            height: auto;
            color: #ccc;
        }

        .div-icon-pesquisa{
            margin-bottom: 15px;
        }
    }

</style>