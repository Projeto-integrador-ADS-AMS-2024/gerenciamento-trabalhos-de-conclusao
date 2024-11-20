<script>
    import Li from './Li.vue';      
    
    export default {
        components: { Li },
        data() {
            return {
                menuSelectedOption: "Entregues"
            };
        },
        methods: {
            changeMenuSelectedOption(option) {
                this.menuSelectedOption = option;
            }
        }
    }
</script>

<template>
    <div>
        <nav>
            <ul>
                <Li @click="changeMenuSelectedOption('Pendentes')" label="Pendentes"/>
                <Li @click="changeMenuSelectedOption('Em atraso')" label="Em atraso"/>
                <Li @click="changeMenuSelectedOption('Entregues')" label="Entregues"/>
            </ul>
        </nav>
 
        <div v-if="menuSelectedOption === 'Pendentes'">
            <Li label="Pendencia 1"/>
            <Li label="Pendencia 2"/>
        </div>

        <div v-if="menuSelectedOption === 'Em atraso'">
            <Li label="Pendencia atrasada 1"/>
            <Li label="Pendencia atrasada 2"/>
            <Li label="Pendencia atrasada 3"/>
            <Li label="Pendencia atrasada 4"/>
        </div>

        <div v-if="menuSelectedOption === 'Entregues'">
            <Li label="Pendencia entregue 1"/>
            <Li label="Pendencia entregue 2"/>
        </div>
    </div>
</template>

<style>  
    nav {
        
        ul {
            display: flex;
            gap: 30px;
            
        }
    }
</style>