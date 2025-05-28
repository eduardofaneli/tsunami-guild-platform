import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { Send, User, GamepadIcon, MessageSquare, Clock, Languages } from 'lucide-react'
import { useState } from 'react'
import ClassDropdown from './ClassDropdown'

const ApplicationSection = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(123, 104, 238, 0.1) 0%, transparent 50%),
    ${props => props.theme.colors.background.primary};
`

const Container = styled.div`
  max-width: 800px;
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
  margin-bottom: ${props => props.theme.spacing['3xl']};
  line-height: 1.7;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`

const FormContainer = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  backdrop-filter: blur(10px);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.lg};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  
  .classes-section {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.xl};
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.primary};
  }
`

const Input = styled.input`
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`

const Select = styled.select`
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
  }

  option {
    background: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.text.primary};
  }
`

const TextArea = styled.textarea`
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.base};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.xs};
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  transition: all ${props => props.theme.transitions.normal};
  margin-top: ${props => props.theme.spacing.lg};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.success}, #45a049);
  color: white;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  margin-top: ${props => props.theme.spacing.xl};

  h3 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`

interface FormData {
  playerName: string
  discordTag: string
  language: string
  age: string
  level: string
  gearScore: string
  primaryClass: string
  secondaryClass: string
  experience: string
  playtime: string
  motivation: string
  previousGuilds: string
}

const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Em produção, enviaria os dados do formulário para o backend
    if (process.env.NODE_ENV !== 'production') {
      console.log('Dados do formulário:', formData);
    }
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  if (isSubmitted) {
    return (
      <ApplicationSection id="application">
        <Container>
          <SuccessMessage
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Candidatura Enviada com Sucesso! 🎉</h3>
            <p>
              Obrigado por se candidatar à Guild TSUNAMI! Nossa equipe analisará sua aplicação 
              e entraremos em contato através do Discord em até 48 horas.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                marginTop: '16px',
                cursor: 'pointer'
              }}
            >
              Enviar Nova Candidatura
            </button>
          </SuccessMessage>
        </Container>
      </ApplicationSection>
    )
  }

  return (
    <ApplicationSection id="application">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle variants={itemVariants}>
            Candidatar-se à TSUNAMI
          </SectionTitle>

          <Description variants={itemVariants}>
            Pronto para se juntar à nossa elite? Preencha o formulário abaixo e nossa 
            liderança avaliará sua candidatura. Seja honesto e detalhado em suas respostas.
          </Description>

          <FormContainer variants={itemVariants}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormRow>
                <FormGroup>
                  <Label>
                    <User />
                    Nome do Jogador *
                  </Label>
                  <Input
                    {...register('playerName', { 
                      required: 'Nome do jogador é obrigatório',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                    })}
                    placeholder="Seu nome no jogo"
                  />
                  {errors.playerName && <ErrorMessage>{errors.playerName.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <MessageSquare />
                    Discord Tag *
                  </Label>
                  <Input
                    {...register('discordTag', { 
                      required: 'Discord tag é obrigatório',
                      pattern: { value: /^.+#\d{4}$/, message: 'Formato: Usuario#1234' }
                    })}
                    placeholder="Usuario#1234"
                  />
                  {errors.discordTag && <ErrorMessage>{errors.discordTag.message}</ErrorMessage>}
                </FormGroup>
              </FormRow>

              <FormRow>              
                <FormGroup>
                  <Label>
                    <Languages />
                    Idioma *
                  </Label>
                  <Select
                    {...register('language', { required: 'Idioma é obrigatório' })}
                  >
                    <option value="">Selecione o idioma que você fala</option>
                    <option value="portugues">Português</option>
                    <option value="ingles">Inglês</option>
                    <option value="espanhol">Espanhol</option>
                    <option value="multi">Multilingue</option>
                  </Select>
                  {errors.language && <ErrorMessage>{errors.language.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <User />
                    Idade *
                  </Label>
                  <Input
                    type="number"
                    {...register('age', { 
                      required: 'Idade é obrigatória',
                      min: { value: 18, message: 'Idade mínima: 18 anos' }
                    })}
                    placeholder="Sua idade"
                  />
                  {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
                </FormGroup>
              </FormRow>

              <FormRow>
                 <FormGroup>
                  <Label>
                    <Clock />
                    Disponibilidade *
                  </Label>
                  <Select
                    {...register('playtime', { required: 'Disponibilidade é obrigatória' })}
                  >
                    <option value="">Selecione sua disponibilidade</option>
                    <option value="casual">Casual (2-3x por semana)</option>
                    <option value="regular">Regular (4-5x por semana)</option>
                    <option value="hardcore">Hardcore (todos os dias)</option>
                  </Select>
                  {errors.playtime && <ErrorMessage>{errors.playtime.message}</ErrorMessage>}
                </FormGroup>

               

                <FormGroup>
                  <Label>
                    <GamepadIcon />
                    Gear Score *
                  </Label>
                  <Input
                    type="number"
                    {...register('gearScore', { 
                      required: 'Gear Score é obrigatório',
                      min: { value: 2500, message: 'Gear Score mínimo: 2500' }
                    })}
                    placeholder="Seu gear score"
                  />
                  {errors.gearScore && <ErrorMessage>{errors.gearScore.message}</ErrorMessage>}
                </FormGroup>
              </FormRow>

              <div className="classes-section">
                <FormGroup>
                  <Label>
                    <GamepadIcon />
                    Classe Principal *
                  </Label>
                  <Controller
                    name="primaryClass"
                    control={control}
                    rules={{ required: 'Classe principal é obrigatória' }}
                    render={({ field }) => (
                      <ClassDropdown
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.primaryClass?.message}
                      />
                    )}
                  />
                </FormGroup>
              </div>

                <FormGroup>
                  <Label>
                    <GamepadIcon />
                    Classe Secundária
                  </Label>
                  <Controller
                    name="secondaryClass"
                    control={control}
                    render={({ field }) => (
                      <ClassDropdown
                        value={field.value}
                        onChange={field.onChange}
                        isSecondary={true}
                        error={errors.secondaryClass?.message}
                      />
                    )}
                  />
              </FormGroup>

              <FormGroup>
                <Label>
                  <GamepadIcon />
                  Experiência em MMORPGs *
                </Label>
                <TextArea
                  {...register('experience', { 
                    required: 'Experiência é obrigatória',
                    minLength: { value: 50, message: 'Mínimo 50 caracteres' }
                  })}
                  placeholder="Descreva sua experiência em MMORPGs, outros jogos que jogou, tempo de experiência, etc."
                />
                {errors.experience && <ErrorMessage>{errors.experience.message}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>
                  <MessageSquare />
                  Por que quer se juntar à TSUNAMI? *
                </Label>
                <TextArea
                  {...register('motivation', { 
                    required: 'Motivação é obrigatória',
                    minLength: { value: 50, message: 'Mínimo 50 caracteres' }
                  })}
                  placeholder="Conte-nos por que quer fazer parte da nossa guild e o que espera da experiência."
                />
                {errors.motivation && <ErrorMessage>{errors.motivation.message}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>
                  <User />
                  Guilds Anteriores
                </Label>
                <TextArea
                  {...register('previousGuilds')}
                  placeholder="Informe suas guilds anteriores e o motivo de ter saído (opcional)."
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⚡
                    </motion.div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send />
                    Enviar Candidatura
                  </>
                )}
              </SubmitButton>
            </Form>
          </FormContainer>
        </motion.div>
      </Container>
    </ApplicationSection>
  )
}

export default ApplicationForm
