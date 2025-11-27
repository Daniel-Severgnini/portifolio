import Tittle from '../../components/tittle'
import Paragrafo from '../../components/Paragrafo'
import { GitSection } from './styles'

const About = () => (
  <section>
    <Tittle fontSize={16}>Sobre mim</Tittle>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque accusamus
      necessitatibus mollitia sapiente sint iure. Incidunt, architecto commodi
      hic similique cumque, veniam distinctio praesentium velit expedita,
      facilis in vitae ex.
    </Paragrafo>
    <GitSection>
      <img src="https://github-readme-stats.vercel.app/api?username=daniel-severgnini&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=daniel-severgnini&layout=compact&langs_count=7&theme=dracula" />
    </GitSection>
  </section>
)

export default About
