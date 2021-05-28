import axios from 'axios'

const servico = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
})

export function createPaciente() {
  return servico.post('/pacientes')
}
