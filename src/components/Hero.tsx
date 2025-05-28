import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Sword, Shield, Crown, Users, Clock, Ghost } from 'lucide-react'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: 
    radial-gradient(circle at 20% 80%, rgba(123, 104, 238, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(76, 154, 255, 0.3) 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #2d1b69 100%);
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.md};
  }
`

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['6xl']};
  font-weight: 900;
  margin-bottom: ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, #4c9aff, #7b68ee, #4c9aff);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`

const Subtitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-weight: 300;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`

const Description = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.muted};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing['2xl']};
  line-height: 1.8;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
    max-width: 100%;
  }
`

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing['3xl']} 0;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${props => props.theme.spacing.lg};
    margin: ${props => props.theme.spacing['2xl']} 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.md};
  }
`

const StatCard = styled(motion.div)`
  background: rgba(26, 26, 58, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.glow};
    border-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.md};
  }
`

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  margin: 0 auto ${props => props.theme.spacing.md};

  svg {
    width: 28px;
    height: 28px;
    color: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const StatNumber = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    max-width: 280px;
  }
`

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: rgba(76, 154, 255, 0.1);
`

const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <HeroSection>
      <FloatingElements>
        <FloatingIcon
          style={{ top: '20%', left: '10%' }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sword size={48} />
        </FloatingIcon>
        <FloatingIcon
          style={{ top: '60%', right: '15%' }}
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Shield size={64} />
        </FloatingIcon>
        <FloatingIcon
          style={{ bottom: '20%', left: '20%' }}
          animate={{ y: [-15, 25, -15] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Crown size={56} />
        </FloatingIcon>
      </FloatingElements>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
             GUILD TSUNAMI
          </Title>
          
          <Subtitle variants={itemVariants}>
            Um Tsunami de Poder no Throne and Liberty
          </Subtitle>
          
          <Description variants={itemVariants}>
            Junte-se à nossa batalha no Throne and Liberty. Unidos pela força, 
            guiados pela estratégia e focados na vitória. Venha fazer parte da nossa 
            lenda e conquiste vitórias ao nosso lado.
          </Description>

          <StatsGrid variants={itemVariants}>
            <StatCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatIcon>
                <Users />
              </StatIcon>
              <StatNumber>60+</StatNumber>
              <StatLabel>Membros Ativos</StatLabel>
            </StatCard>

            <StatCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatIcon>
                <Clock />
              </StatIcon>
              <StatNumber>PRIME TIME</StatNumber>
              <StatLabel>20:00 ~ 23:00</StatLabel>
            </StatCard>

            <StatCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatIcon>
                <Ghost />
              </StatIcon>
              <StatNumber>Comunidade</StatNumber>
              <StatLabel>Try hard</StatLabel>
            </StatCard>

            <StatCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatIcon>
                <Sword />
              </StatIcon>
              <StatNumber>PVP</StatNumber>
              <StatLabel>competitivo</StatLabel>
            </StatCard>
          </StatsGrid>

          <CTAButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToApplication}
          >
            Junte-se a Nós
          </CTAButton>
        </motion.div>
      </Container>
    </HeroSection>
  )
}

export default Hero
