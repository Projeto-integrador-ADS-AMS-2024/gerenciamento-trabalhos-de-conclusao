<template>
    <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>
</template>

<script>
    export default{
        mounted() {
            // Carrega o script do VLibras quando o componente é montado
            const script = document.createElement("script");
            script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
            script.onload = () => {
                new window.VLibras.Widget("https://vlibras.gov.br/app");
            };
            document.body.appendChild(script);
            
            const pluginTools = document.createElement("script");
            pluginTools.src = "https://cdn.userway.org/widget.js";
            pluginTools.setAttribute("data-account", "EIXt1YrjVs");
            document.body.appendChild(pluginTools);
            
        }
    };
</script>

<style>
</style>