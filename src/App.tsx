import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'

function App() {
  const [UsingThemeDark, setUsingThemeDark] = useState(false)

  function toggleTheme() {
    setUsingThemeDark(!UsingThemeDark)
  }

  return (
    <ThemeProvider theme={UsingThemeDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
