import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string // Note: corrija o typo "Prymary" para "Primary" se possível
    colorSecondary: string
    colorBackground: string
    colorBtnBackground: string
    colorBorder: string
  }
}
