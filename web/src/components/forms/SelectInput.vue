<script setup>
    import { ref, watch } from 'vue';

    // Definição das propriedades (props) recebidas pelo componente
    const props = defineProps({
        label: String,        // Prop para o rótulo do campo (texto que descreve o campo).
        inputName: String,    // Prop para definir o atributo 'name' do campo, usado em formulários.
        inputId: String,      // Prop para definir o atributo 'id', útil para associar labels ao campo.
        modelValue: String,   // Prop usada para ligação bidirecional com o 'v-model' (valor atual).
        options: {            // Prop para uma lista de opções (usada em selects, por exemplo).
            type: Array,      // Especifica que 'options' deve ser um array.
            default: () => [] // Define um valor padrão (array vazio) caso 'options' não seja fornecido.
        },
        ariaLabel: String     // Prop para acessibilidade, descreve o campo para leitores de tela.
    });

    // Emitir um evento para atualizar o `v-model`
    const emit = defineEmits(['update:modelValue']);
    const selectedValue = ref(props.modelValue);  // Ligação do v-model com uma variável reativa local

    // Assistir mudanças na variável reativa e emitir para o pai
    watch(selectedValue, (newValue) => {
        emit('update:modelValue', newValue);  // Atualiza o valor do `v-model` no componente pai
    });
</script>

<template>
    <label :for="inputId">{{ label }}</label>
    <select
        :id="inputId"           
        :name="inputName"       
        :aria-label="ariaLabel" 
        v-model="selectedValue" 
        >
        <!-- Define dinamicamente o ID do campo usando o valor da prop `inputId` -->
        <!-- Define dinamicamente o atributo `name`, útil para enviar dados de formulário -->
        <!-- Define um texto descritivo para leitores de tela, melhorando a acessibilidade -->
        <!-- Ligação bidirecional com a variável `selectedValue` -->

        <option
            v-for="option in options" 
            :key="option.value"       
            :value="option.value"     
            >
            {{ option.text }}         
        </option>
        <!-- Loop através do array `options`, criando um <option> para cada item -->
        <!-- Atribui uma chave única para cada <option> baseado em seu valor -->
        <!-- Define o atributo `value` do <option> com o valor da opção atual -->
        <!-- Exibe o texto visível para o usuário dentro do menu suspenso -->
    </select>
</template>

<style>
    select {
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background-color: #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
    }
</style>
