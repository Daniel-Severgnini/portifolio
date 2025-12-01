import styled from 'styled-components'

import { Props } from '.'

export const P = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.colorPrimary
      : props.theme.colorSecondary};
  line-height: 22px;
  font-weight: 400;
`
