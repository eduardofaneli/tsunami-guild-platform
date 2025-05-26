import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import useDynamicTitle from './hooks/useDynamicTitle'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #2d1b69 100%);
  color: white;
  overflow-x: hidden;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (min-width: 1401px) {
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
  }
`

const Main = styled.main`
  position: relative;
`

function App() {
  // Hook para título dinâmico
  useDynamicTitle()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Main>
          <Hero />
          <About />
          <Contact />
          <ApplicationForm />
        </Main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
