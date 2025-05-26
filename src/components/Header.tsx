import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Users, Mail, FileText, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.md};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 900;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }

  &:hover svg {
    transform: rotate(5deg) scale(1.1);
  }
`

const LogoIcon = styled(Waves)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.secondary};
  transition: all ${props => props.theme.transitions.fast};
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  list-style: none;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: rgba(26, 26, 58, 0.3);
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  min-height: 44px;
  min-width: 44px;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(76, 154, 255, 0.15);
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(76, 154, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(76, 154, 255, 0.3);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all ${props => props.theme.transitions.fast};
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileMenuCloseButton = styled(motion.button)`
  background: rgba(26, 26, 58, 0.3);
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props => props.theme.colors.accent};
    background: rgba(255, 107, 107, 0.15);
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all ${props => props.theme.transitions.fast};
  }

  &:hover svg {
    transform: scale(1.1) rotate(90deg);
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 15, 35, 0.98);
  backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: ${props => props.theme.spacing.md};
    padding: ${props => props.theme.spacing.lg};
  }
`

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const MobileNavLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all ${props => props.theme.transitions.fast};
  width: 100%;
  max-width: 280px;
  min-height: 56px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(76, 154, 255, 0.12);
    transform: translateX(8px);
  }

  &:active {
    transform: translateX(4px);
    background: rgba(76, 154, 255, 0.08);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all ${props => props.theme.transitions.fast};
    color: ${props => props.theme.colors.text.muted};
  }

  &:hover svg {
    color: ${props => props.theme.colors.primary};
    transform: translateX(2px);
  }
`

const MobileMenuLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 900;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};

  &:hover {
    transform: scale(1.05);
    background: rgba(76, 154, 255, 0.1);
  }

  &:hover svg {
    transform: rotate(5deg) scale(1.1);
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${props => props.theme.colors.secondary};
    transition: all ${props => props.theme.transitions.fast};
  }
`

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
  transition: all ${props => props.theme.transitions.fast};
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(76, 154, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }

  &:hover svg {
    transform: scale(1.1);
    color: ${props => props.theme.colors.primary};
  }

  &:active {
    transform: translateY(0px);
  }

  svg {
    width: 18px;
    height: 18px;
    transition: all ${props => props.theme.transitions.fast};
  }
`

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fecha o menu quando pressiona ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Previne scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Fecha o menu mobile após navegar
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <HeaderContainer
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Nav>
          <Logo onClick={scrollToTop}>
            <LogoIcon />
            TSUNAMI
          </Logo>
          
          <NavLinks>
            <li>
              <NavLink onClick={() => scrollToSection('about')}>
                <Users />
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToSection('contact')}>
                <Mail />
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToSection('application')}>
                <FileText />
                Candidatar-se
              </NavLink>
            </li>
          </NavLinks>

          <MobileMenuButton
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            style={{
              background: isMobileMenuOpen 
                ? 'rgba(76, 154, 255, 0.2)' 
                : 'rgba(26, 26, 58, 0.3)',
              borderColor: isMobileMenuOpen 
                ? '#4c9aff' 
                : 'rgba(76, 154, 255, 0.2)'
            }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuHeader>
              <MobileMenuLogo onClick={scrollToTop}>
                <LogoIcon />
                TSUNAMI
              </MobileMenuLogo>
              <MobileMenuCloseButton
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.95 }}
              >
                <X />
              </MobileMenuCloseButton>
            </MobileMenuHeader>

            <MobileNavLink
              onClick={() => scrollToSection('about')}
            >
              <Users />
              Sobre Nós
            </MobileNavLink>

            <MobileNavLink
              onClick={() => scrollToSection('contact')}
            >
              <Mail />
              Contato
            </MobileNavLink>

            <MobileNavLink
              onClick={() => scrollToSection('application')}
            >
              <FileText />
              Candidatar-se
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
