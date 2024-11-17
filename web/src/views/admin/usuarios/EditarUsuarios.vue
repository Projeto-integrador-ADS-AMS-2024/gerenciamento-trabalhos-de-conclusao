<script setup>
import { ref, computed } from 'vue';
import TextInput from '@/components/forms/TextInput.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import Button from '@/components/forms/Button.vue';
import DateInput from '@/components/forms/DateInput.vue';
import EmailInput from '@/components/forms/EmailInput.vue';
import PasswordInput from '@/components/forms/PasswordInput.vue';

// Opções para os selects
const atuacaoOptions = ['Aluno', 'Professor'];
const turmaOptions = ['1° ADS', '2° AMS-ADS', '1° LOG'];
const papelOptions = ['Diretor', 'Coordenador', 'Orientador', 'TG'];

// Estados reativos
const areaAtuacao = ref('');
const nome = ref('');
const cpf = ref('');
const ra = ref('');
const turma = ref('');
const papel = ref('');
const email = ref('');
const senha = ref('');
const dtNascimento = ref('');

// Computed properties para controle de visibilidade
const showCamposAluno = computed(() => areaAtuacao.value === 'Aluno');
const showCamposProfessor = computed(() => areaAtuacao.value === 'Professor');
</script>

<template>
    <div class="div-conteudo-principal">
        <div class="div-link-pagina">
            <h2>Ferramentas > <router-link to="/admin/" class="router-link">Usuários</router-link> > <router-link
                    to="/admin/editarUsuario" class="router-link">Editar Usuário</router-link></h2>
        </div>

        <form>
            <!-- Área de Atuação com Placeholder -->
            <div>
                <SelectInput id="areaAtuacao" label="Área de Atuação" :options="atuacaoOptions" v-model="areaAtuacao"
                    placeholder="Selecionar..." />
            </div>

            <!-- Campos Comuns -->
            <div v-if="areaAtuacao">
                <!-- Nome -->
                <TextInput id="nome" label="Nome" placeholder="Insira o nome" v-model="nome" />

                <!-- CPF -->
                <TextInput id="cpf" label="CPF" placeholder="Insira o CPF" v-model="cpf" />

                <!-- Data de Nascimento -->
                <DateInput id="dt_nascimento" label="Data de Nascimento" v-model="dtNascimento" />

                <!-- Email -->
                <EmailInput id="email" label="Email" placeholder="Insira o email" v-model="email" />

                <!-- Senha -->
                <PasswordInput id="senha" label="Senha" placeholder="Insira a senha" v-model="senha" />

                <!-- Campos específicos para Aluno -->
                <div v-if="showCamposAluno">
                    <TextInput id="ra" label="RA" placeholder="Insira o RA" v-model="ra" />
                    <SelectInput id="turma" label="Turma" :options="turmaOptions" v-model="turma"
                        placeholder="Selecionar..." />
                </div>

                <!-- Campos específicos para Professor -->
                <div v-if="showCamposProfessor">
                    <SelectInput id="papel" label="Papel" :options="papelOptions" v-model="papel"
                        placeholder="Selecionar..." />
                </div>
            </div>

            <!-- Botão de Submissão -->
            <Button>Editar Usuário</Button>
        </form>
    </div>
</template>

<style scoped>
select {
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
}

option[disabled] {
    color: #aaa;
}
</style>
