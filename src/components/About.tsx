import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Target, Users, Trophy, Zap, Shield, Sword } from 'lucide-react'

const AboutSection = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: 
    radial-gradient(circle at 70% 30%, rgba(123, 104, 238, 0.1) 0%, transparent 50%),
    ${props => props.theme.colors.background.primary};
  position: relative;
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
  margin-bottom: ${props => props.theme.spacing['2xl']};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
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

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  margin-bottom: ${props => props.theme.spacing.xl};

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

const FeatureTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.7;
  font-size: ${props => props.theme.fontSizes.base};
`

const ValuesSection = styled.div`
  text-align: center;
`

const ValuesTitle = styled(motion.h3)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.md};
  }
`

const ValueCard = styled(motion.div)`
  padding: ${props => props.theme.spacing.xl};
  background: rgba(76, 154, 255, 0.05);
  border: 1px solid rgba(76, 154, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    background: rgba(76, 154, 255, 0.1);
    border-color: ${props => props.theme.colors.primary};
  }
`

const ValueIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.primary};
  margin: 0 auto ${props => props.theme.spacing.md};

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`

const ValueTitle = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ValueDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.6;
`

const About = () => {
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
    <AboutSection id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle variants={itemVariants}>
            Sobre a Guild TSUNAMI
          </SectionTitle>

          <Grid>
            <FeatureCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                <Target />
              </FeatureIcon>
              <FeatureTitle>Nossa Missão</FeatureTitle>
              <FeatureDescription>
                Dominar os territórios de Throne and Liberty através de estratégia, 
                cooperação e habilidade. Buscamos ser a guild mais respeitada e temida 
                do servidor, sempre mantendo nossos valores de honra e lealdade.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                <Users />
              </FeatureIcon>
              <FeatureTitle>Nossa Comunidade</FeatureTitle>
              <FeatureDescription>
                Somos mais que uma guild, somos uma família. Com mais de 150 membros 
                ativos, oferecemos um ambiente acolhedor onde veteranos ajudam novatos 
                e todos crescem juntos em direção à excelência.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                <Trophy />
              </FeatureIcon>
              <FeatureTitle>Nossos Conquistas</FeatureTitle>
              <FeatureDescription>
                Atualmente rankeados no TOP 3 do servidor, com mais de 25 territórios 
                sob nosso controle e mais de 500 vitórias em batalhas épicas. Nossa 
                história é escrita com sangue, suor e glória.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                <Zap />
              </FeatureIcon>
              <FeatureTitle>Atividades Regulares</FeatureTitle>
              <FeatureDescription>
                Organizamos raids semanais, eventos de PvP, torneios internos e 
                expedições para dungeons épicas. Sempre há algo acontecendo na 
                TSUNAMI para manter todos nossos membros engajados e progredindo.
              </FeatureDescription>
            </FeatureCard>
          </Grid>

          <ValuesSection>
            <ValuesTitle variants={itemVariants}>
              Nossos Valores
            </ValuesTitle>
            
            <ValuesGrid>
              <ValueCard
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ValueIcon>
                  <Shield />
                </ValueIcon>
                <ValueTitle>Lealdade</ValueTitle>
                <ValueDescription>
                  Protegemos nossos aliados e nunca abandonamos um companheiro de guild.
                </ValueDescription>
              </ValueCard>

              <ValueCard
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ValueIcon>
                  <Sword />
                </ValueIcon>
                <ValueTitle>Honra</ValueTitle>
                <ValueDescription>
                  Lutamos com dignidade e respeitamos nossos oponentes dignos.
                </ValueDescription>
              </ValueCard>

              <ValueCard
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ValueIcon>
                  <Users />
                </ValueIcon>
                <ValueTitle>União</ValueTitle>
                <ValueDescription>
                  Juntos somos invencíveis. A força da TSUNAMI vem de nossa unidade.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>
        </motion.div>
      </Container>
    </AboutSection>
  )
}

export default About
