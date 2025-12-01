import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.colorBackground};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colorPrimary};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768) {
    margin-bottom: 40px;
    tex-align: center;
  }
`
