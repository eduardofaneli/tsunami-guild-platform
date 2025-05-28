import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ApplicationForm from './components/ApplicationForm'

import useDynamicTitle from './hooks/useDynamicTitle'

// Componente de debug - remova para produção
// Importação lazy para evitar carregar em produção quando não necessário
import { lazy, Suspense } from 'react'
const DebugPage = lazy(() => import('./components/dev/DebugPage'))

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
  useDynamicTitle()
  const [isDebugPage, setIsDebugPage] = useState(false)
  
  // Verificar se a URL contém "/debug" para mostrar a página de debug
  useEffect(() => {
    const path = window.location.pathname
    setIsDebugPage(path.includes('/debug'))
    
    // Listener para mudanças na URL (caso seja uma SPA com navegação interna)
    const handleLocationChange = () => {
      setIsDebugPage(window.location.pathname.includes('/debug'))
    }
    
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])
  
  // Renderizar página de debug se estiver na rota "/debug"
  if (isDebugPage) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<div>Carregando ferramentas de debug...</div>}>
          <DebugPage />
        </Suspense>
      </ThemeProvider>
    )
  }

  // Renderizar página normal
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
