<script>
import { ref, computed } from 'vue';
import TextInput from '@/components/forms/TextInput.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import CheckBoxInput from '@/components/forms/CheckBoxInput.vue';
import Button from '@/components/forms/Button.vue';
import DateInput from '@/components/forms/DateInput.vue';
import EmailInput from '@/components/forms/EmailInput.vue';
import PasswordInput from '@/components/forms/PasswordInput.vue';
import { Usuario } from '@/services/usuarios';

export default {
  name: 'CadastrarTurmas',
  components: { TextInput, SelectInput, CheckBoxInput, Button, DateInput, EmailInput, PasswordInput },
  setup(){
    // Opções para os selects
    const atuacaoOptions = ['Aluno', 'Professor'];
    const turmaOptions = ['1° ADS', '2° AMS-ADS', '1° LOG'];
    const papelOptions = ['Diretor', 'Coordenador', 'Orientador', 'TG'];

    // Estados reativos
    const areaAtuacao = ref('');
    const nome = ref('');
    const cpf = ref('');
    const ra = ref('');
    const matricula = ref('');
    const turma = ref('');
    const papel = ref('');
    const email = ref('');
    const senha = ref('');
    const dataNascimento = ref('');

    // Computed properties para controle de visibilidade
    const showCamposAluno = computed(() => {
      return areaAtuacao.value === 'Aluno';
    });

    const showCamposProfessor = computed(() => {
      return areaAtuacao.value === 'Professor';
    });

    return{
      atuacaoOptions,turmaOptions, papelOptions, areaAtuacao, nome, cpf, ra,email,senha,dataNascimento,matricula,
      turma,papel,showCamposAluno,showCamposProfessor
    }
  },
  methods:{
    async newUser() {
      // console.log(this.areaAtuacao)
      
      if(this.areaAtuacao == 'Aluno'){
        if (!this.nome || !this.cpf || !this.dataNascimento || !this.email || !this.senha || !this.ra || !this.turma) {
          // alert('Por favor, preencha todos os campos.');
          console.log("Aluno: ", 'Nome:',this.nome , 'CPF:',this.cpf , 'Data:',this.dataNascimento , 'Email:',this.email , 'Senha:',this.senha , 'RA:',this.ra , 'Turma:',this.turma)
          return;
        }
      
      }

      if(this.areaAtuacao == 'Professor'){
        if (!this.nome || !this.cpf || !this.dataNascimento || !this.email || !this.senha || !this.papel || !this.matricula) {
          // alert('Por favor, preencha todos os campos.');
          console.log("Professor:", 'Nome:', this.nome , 'CPF:',this.cpf , 'Data:',this.dataNascimento , 'Email:',this.email , 'Senha:', this.senha , 'Papel:',this.papel, 'Matricula:', this.matricula)
          return;
        }
      
      }

      try {
        const novoUsuario = {
          nome: this.nome,
          cpf: this.cpf,
          email: this.email,
          senha: this.senha,
          dataNascimento: this.dataNascimento,
          ...(this.areaAtuacao === 'Aluno' && { ra: this.ra, turmaId: this.turma }),
          ...(this.areaAtuacao === 'Professor' && { papel: this.papel, matricula: this.matricula }),
        };
        // console.log(novoUsuario)

        const novoUser = await Usuario.createUsuario(novoUsuario, this.areaAtuacao);
        console.log('Usuario criado:', novoUsuario);
        location.replace('/admin/usuarios')
      }catch (error) {
        console.error('Erro ao criar usuario:', error);
      }

    }
  }
}



</script>

<template>
  <div class="div-conteudo-principal">
    <div class="div-link-pagina">
      <h2>
        Ferramentas >
        <router-link to="/" class="router-link">Usuários</router-link> >
        <router-link to="/admin/cadastrarUsuarios" class="router-link">Cadastrar Usuários</router-link>
      </h2>
    </div>

    <form @submit.prevent="newUser">
      <!-- Área de Atuação com Placeholder -->
      <div>
        <SelectInput id="areaAtuacao" label="Área de Atuação" v-model="areaAtuacao" :options="atuacaoOptions"
          placeholder="Selecionar..." />
      </div>

      <!-- Campos Comuns -->
      <div v-if="areaAtuacao">
        <!-- Nome -->
        <TextInput id="nome" label="Nome" placeholder="Insira o nome" v-model="nome" @blur="focusInput(id)" info="Preencha corretamente este campo!"/>

        <!-- CPF -->
        <TextInput id="cpf" label="CPF" placeholder="Insira o CPF" v-model="cpf" @blur="focusInput(id)" info="Preencha corretamente este campo!"/>

        <!-- Data de Nascimento -->
        <DateInput id="dt_nascimento" label="Data de Nascimento" v-model="dataNascimento" />

        <!-- Email -->
        <EmailInput id="email" label="Email" placeholder="Insira o email" v-model="email" />

        <!-- Senha -->
        <PasswordInput id="senha" label="Senha" placeholder="Insira a senha" v-model="senha" />

        <!-- Campos específicos para Aluno -->
        <div v-if="showCamposAluno">
          <TextInput id="ra" label="RA" placeholder="Insira o RA" v-model="ra"  @blur="focusInput(id)" info="Preencha corretamente este campo!"/>
          <SelectInput id="turma" label="Turma" :options="turmaOptions" v-model="turma" placeholder="Selecionar..." />
        </div>

        <!-- Campos específicos para Professor -->
        <div v-if="showCamposProfessor">
          <TextInput id="matricula" label="Matricula" placeholder="Insira a matricula" v-model="matricula"  @blur="focusInput(id)" info="Preencha corretamente este campo!"/>
          <SelectInput id="papel" label="Papel" :options="papelOptions" v-model="papel" placeholder="Selecionar..." />
        </div>
      </div>

      <!-- Botão de Submissão -->
      <Button>Cadastrar Usuário</Button>
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
