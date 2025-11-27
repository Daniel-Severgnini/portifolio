import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Tittle from '../../components/tittle'
import { ButtonTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Tittle fontSize={20}>Daniel Severgnini</Tittle>
      <Paragrafo tipo="secundario" fontSize={16}>
        daniel-severgnini
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Description>
      <ButtonTheme>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
