import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MessageCircle, Users, Calendar } from 'lucide-react'

const ContactSection = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(76, 154, 255, 0.1) 0%, transparent 50%),
    ${props => props.theme.colors.background.secondary};
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

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`

const Description = styled(motion.p)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing['3xl']};
  line-height: 1.7;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
    max-width: 100%;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`

const ContactCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.glow};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.lg};
  }
`

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  margin: 0 auto ${props => props.theme.spacing.xl};

  svg {
    width: 36px;
    height: 36px;
    color: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 64px;
    height: 64px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`

const ContactTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`

const ContactInfo = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`

const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  font-weight: 600;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`

const LeadershipSection = styled.div`
  background: rgba(76, 154, 255, 0.05);
  border: 1px solid rgba(76, 154, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  text-align: center;
`

const LeadershipTitle = styled(motion.h3)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const LeadersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`

const LeaderCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-4px);
  }
`

const LeaderAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.md};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 700;
  color: white;
`

const LeaderName = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`

const LeaderRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const LeaderDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.5;
`

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle variants={itemVariants}>
            Entre em Contato
          </SectionTitle>

          <Description variants={itemVariants}>
            Pronto para se juntar à TSUNAMI? Ou tem alguma dúvida sobre nossa guild? 
            Entre em contato conosco através dos canais abaixo e nossa liderança 
            responderá o mais rápido possível.
          </Description>

          <ContactGrid>
            <ContactCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <MessageCircle />
              </ContactIcon>
              <ContactTitle>Discord Oficial</ContactTitle>
              <ContactInfo>
                Nosso servidor Discord é o centro de todas as comunicações da guild. 
                Junte-se para conversar, coordenar raids e conhecer a comunidade.
              </ContactInfo>
              <ContactButton
                href="https://discord.gg/tsunami"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                Entrar no Discord
              </ContactButton>
            </ContactCard>

            <ContactCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <Calendar />
              </ContactIcon>
              <ContactTitle>Horários de Atividade</ContactTitle>
              <ContactInfo>
                <strong>Raids:</strong> Terças e Quintas às 20:00<br />
                <strong>PvP:</strong> Sábados às 19:00<br />
                <strong>Eventos:</strong> Domingos às 18:00<br />
                <strong>Suporte:</strong> Todos os dias das 18:00 às 23:00
              </ContactInfo>
              <ContactButton
                href="#application"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} />
                Ver Calendário
              </ContactButton>
            </ContactCard>

            <ContactCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <Users />
              </ContactIcon>
              <ContactTitle>Requisitos</ContactTitle>
              <ContactInfo>
                <strong>Level mínimo:</strong> 40+<br />
                <strong>Gear Score:</strong> 2500+<br />
                <strong>Atividade:</strong> Mínimo 3x por semana<br />
                <strong>Discord:</strong> Obrigatório<br />
                <strong>Idade:</strong> 18+ anos
              </ContactInfo>
              <ContactButton
                href="#application"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={18} />
                Candidatar-se
              </ContactButton>
            </ContactCard>
          </ContactGrid>

          <LeadershipSection>
            <LeadershipTitle variants={itemVariants}>
              Nossa Liderança
            </LeadershipTitle>
            
            <LeadersGrid>
              <LeaderCard
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <LeaderAvatar>T</LeaderAvatar>
                <LeaderName>TsunamiKing</LeaderName>
                <LeaderRole>Guild Master</LeaderRole>
                <LeaderDescription>
                  Veterano de MMORPGs com mais de 10 anos de experiência. 
                  Lidera a guild com estratégia e sabedoria.
                </LeaderDescription>
              </LeaderCard>

              <LeaderCard
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <LeaderAvatar>S</LeaderAvatar>
                <LeaderName>StormBreaker</LeaderName>
                <LeaderRole>Vice-Guild Master</LeaderRole>
                <LeaderDescription>
                  Especialista em PvP e coordenação de raids. 
                  Responsável por treinar novos membros.
                </LeaderDescription>
              </LeaderCard>

              <LeaderCard
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <LeaderAvatar>W</LeaderAvatar>
                <LeaderName>WaveRider</LeaderName>
                <LeaderRole>Officer</LeaderRole>
                <LeaderDescription>
                  Gerencia eventos e atividades da guild. 
                  Sempre disponível para ajudar os membros.
                </LeaderDescription>
              </LeaderCard>
            </LeadersGrid>
          </LeadershipSection>
        </motion.div>
      </Container>
    </ContactSection>
  )
}

export default Contact
