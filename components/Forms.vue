<template>
  <section>
    <div class="container">
      <b-field
        :type="{ 'is-danger': $v.form.nome.$error }"
        :message="{
          'Seu nome deve ter no minimo 5 caracteres': $v.form.nome.$error,
        }"
      >
        <template #label>
          <span :class="{ hasError: $v.form.nome.$error }"
            >Nome Completo do Paciente</span
          >
        </template>
        <b-input
          v-model="form.nome"
          placeholder="Digite seu nome completo!"
          @input="$v.form.nome.$touch()"
          @blur="$v.form.nome.$touch()"
        ></b-input>
      </b-field>

      <b-field
        :type="{ 'is-danger': $v.form.cpf.$error }"
        :message="{
          'O cpf deve ser no formato 000.000.000-00': $v.form.cpf.$error,
        }"
      >
        <template #label>
          <span :class="{ hasError: $v.form.cpf.$error }">CPF do Paciente</span>
        </template>
        <b-input
          v-model="form.cpf"
          placeholder="Digite seu nome completo!"
          @input="$v.form.cpf.$touch()"
          @blur="$v.form.cpf.$touch()"
        ></b-input>
      </b-field>

      <b-field
        :type="{ 'is-danger': $v.form.codigo.$error }"
        :message="{
          'O código contem 25 caracteres': $v.form.codigo.$error,
        }"
      >
        <template #label>
          <span :class="{ hasError: $v.form.codigo.$error }"
            >Codigo do paciente</span
          >
        </template>
        <b-input
          v-model="form.codigo"
          placeholder="Digite o codigo do paciente"
          @input="$v.form.codigo.$touch()"
          @blur="$v.form.codigo.$touch()"
        >
        </b-input>
      </b-field>

      <b-field>
        <template #label>
          <span :class="{ hasError: $v.form.data_nascimento.$error }"
            >Data de Nascimento</span
          >
        </template>
        <b-datepicker
          v-model="form.data_nascimento"
          locale="pt-BR"
          placeholder="Escolha a data de nascimento do paciente"
          icon="calendar-today"
          trap-focus
        >
        </b-datepicker>
      </b-field>

      <b-field label="Genero do paciente">
        <b-select expanded placeholder="Selecione um genero">
          <option value="m">Masculino</option>
          <option value="f">Feminino</option>
          <option value="o">Outro</option>
        </b-select>
      </b-field>

      <b-field
        :message="{
          'A observação pode conter até 500 caracteres':
            $v.form.observacao.$error,
        }"
        :type="{ 'is-danger': $v.form.observacao.$error }"
      >
        <template #label>
          <span :class="{ hasError: $v.form.observacao.$error }"
            >Observação</span
          >
        </template>
        <b-input
          v-model="form.observacao"
          type="textarea"
          maxlength="500"
          placeholder="Escreva informações sobre o quadro do paciente"
          @input="$v.form.observacao.$touch()"
          @blur="$v.form.observacao.$touch()"
        ></b-input>
      </b-field>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { minLength } from 'vuelidate/lib/validators'

export default Vue.extend({
  name: 'Forms',
  data() {
    return {
      form: {
        nome: '',
        codigo: '',
        data_nascimento: '',
        genero: '',
        cpf: '',
        observacao: '',
      },
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$anyError) return
      // to form submit after this
      console.log('Form submitted')
    },
  },
  validations: {
    form: {
      cpf: {},
      nome: {
        minLength: minLength(5),
      },
      codigo: {
        minLength: minLength(8),
      },
      data_nascimento: {},
      observacao: {},
      genero: {},
    },
  },
})
</script>

<style>
.container {
  width: 600px;
}
.hasError {
  color: red;
}
</style>
