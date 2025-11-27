import Paragrafo from '../Paragrafo'
import Tittle from '../tittle'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Tittle>Projeto Lista de Tarefas</Tittle>
    <Paragrafo tipo="secundario">Lista de tarefas faita com VueJS</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
