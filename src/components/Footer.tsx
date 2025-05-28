import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Heart, ExternalLink, Github } from 'lucide-react'

const FooterSection = styled.footer`
  background: ${props => props.theme.colors.background.secondary};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['3xl']} 0 ${props => props.theme.spacing.xl};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
`

const FooterSection1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    text-align: center;
    align-items: center;
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
`

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.secondary};
`

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  max-width: 400px;
`

const QuickLinks = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    text-align: left;

    h3 {
      text-align: center;
      margin-bottom: ${props => props.theme.spacing.md};
    }
  }
`

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: ${props => props.theme.spacing.sm};
    padding: 0 ${props => props.theme.spacing.lg};
  }
`

const FooterLink = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  transition: color ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const GameInfo = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    text-align: left;

    h3 {
      text-align: center;
      margin-bottom: ${props => props.theme.spacing.md};
    }
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 ${props => props.theme.spacing.lg};
  }
`

const InfoItem = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  
  strong {
    color: ${props => props.theme.colors.primary};
  }
`

const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.border};
  margin: ${props => props.theme.spacing.xl} 0;
`

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
    text-align: center;
  }
`

const Copyright = styled.div`
  color: ${props => props.theme.colors.text.muted};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme.colors.error};
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: rgba(76, 154, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.secondary};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.glow};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterSection1>
            <Logo>
              <LogoIcon src="/fav-icon.png" />
              TSUNAMI
            </Logo>
            <Description>
              A onda mais poderosa do Throne and Liberty. Junte-se a nós e faça parte dessa comunidade.
            </Description>
          </FooterSection1>

          <QuickLinks>
            <h3>Links Rápidos</h3>
            <LinksList>
              <li>
                <FooterLink onClick={() => scrollToSection('about')}>
                  Sobre Nós
                </FooterLink>
              </li>
              <li>
                <FooterLink onClick={() => scrollToSection('contact')}>
                  Contato
                </FooterLink>
              </li>
              <li>
                <FooterLink onClick={() => scrollToSection('application')}>
                  Candidatar-se
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://discord.gg/BAr8yMF8YR" target="_blank">
                  Discord <ExternalLink />
                </FooterLink>
              </li>
            </LinksList>
          </QuickLinks>

          <GameInfo>
            <h3>Informações do Jogo</h3>
            <InfoList>
              <InfoItem>
                <strong>Jogo:</strong> Throne and Liberty
              </InfoItem>
              <InfoItem>
                <strong>Servidor:</strong> Starlight (SA)
              </InfoItem>
              <InfoItem>
                <strong>Guild:</strong> 水 TSUNAMI 水
              </InfoItem>
              <InfoItem>
                <strong>Horário:</strong> Prime Time (20h - 23h)
              </InfoItem>
              <InfoItem>
                <strong>Foco:</strong> PvP, Competitivo, Comunidade
              </InfoItem>
              <InfoItem>
                <strong>Fundada:</strong> Outubro de 2024
              </InfoItem>
            </InfoList>
          </GameInfo>
        </FooterContent>

        <Divider />

        <BottomSection>
          <Copyright>
            © 2024 Guild TSUNAMI. Feito por NarebaCoder com <Heart /> para a comunidade gamer.
          </Copyright>

          <SocialLinks>
            <SocialLink
              href="https://github.com/eduardofaneli"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </SocialLink>

            <SocialLink
              href="https://discord.gg/BAr8yMF8YR"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >              
              <LogoIcon src="/discord.svg" />
            </SocialLink>

            <SocialLink
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ cursor: 'pointer' }}
            >
              <LogoIcon src="/fav-icon.png" />
            </SocialLink>
          </SocialLinks>
        </BottomSection>
      </Container>
    </FooterSection>
  )
}

export default Footer
