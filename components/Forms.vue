<template>
  <section>
    <div class="container">
      <b-field label="Nome">
        <b-input
          v-model="form.name"
          placeholder="Digite seu nome completo!"
        ></b-input>
      </b-field>

      <b-field label="Email">
        <b-input v-model="form.email" placeholder="Digite seu Email!">
        </b-input>
      </b-field>

      <b-field label="Usuario">
        <b-input
          v-model="form.user"
          placeholder="Digite seu usuario!"
        ></b-input>
      </b-field>

      <b-field label="Senha">
        <b-input
          v-model="form.password"
          password-reveal
          type="password"
          placeholder="Digite sua senha!"
        ></b-input>
      </b-field>
      <b-field>
        <b-button expanded @click="submit">Enviar</b-button>
      </b-field>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const { minLength, email, required } = require('vuelidate/lib/validators')

export default Vue.extend({
  name: 'Forms',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        user: '',
      },
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$anyError) return
      // to form submit after this
      alert('Form submitted')
    },
  },
  validations: {
    forms: {
      email: {
        required,
        email,
        minLength: minLength(5),
      },
      name: {
        minLength: minLength(5),
      },
      password: {
        minLength: minLength(8),
      },
      user: {
        minLength: minLength(4),
      },
    },
  },
})
</script>

<style>
.container {
  width: 600px;
}
</style>
