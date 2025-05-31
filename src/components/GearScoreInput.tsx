import { Controller } from 'react-hook-form';
import type { Control, FieldValues, FieldError, Path } from 'react-hook-form';
import { Shield } from 'lucide-react';
import styled from 'styled-components';

// Importando tipos do ApplicationForm para manter a consistência
// Não precisamos importar tipos se não os estamos usando diretamente

// Reutilizando os estilos dos componentes de formulário
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

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
`;

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
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.xs};
`;

// Interface para tipar as props do componente
interface GearScoreInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
  isRequired?: boolean;
  minValue?: number;
  maxValue?: number;
  className?: string;
}

const GearScoreInput = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  isRequired = true,
  minValue = 0,
  maxValue = 9999,
  className
}: GearScoreInputProps<T>) => {
  return (
    <FormGroup className={className}>
      <Label>
        <Shield />
        {label} {isRequired ? '*' : ''}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired ? (name === 'secondaryGearScore' ? 'Gear Score secundário é obrigatório quando uma classe secundária é selecionada' : 'Gear Score é obrigatório') : false,
          pattern: {
            value: /^[0-9]{1,4}$/,
            message: 'Gear Score deve ser um número de até 4 dígitos'
          },
          validate: (value) => {
            if (!value && !isRequired) return true; // Skip validation if empty and not required
            const number = parseInt(value, 10);
            return (
              !isNaN(number) &&
              number >= minValue &&
              number <= maxValue &&
              /^\d+$/.test(value) ||
              `Gear Score deve ser um número entre ${minValue} e ${maxValue}`
            );
          }
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            style={{ 
              /* Remove as setas do input número */
              appearance: "textfield",
              WebkitAppearance: "none",
              MozAppearance: "textfield"
            }}
            onKeyDown={e => {
              if (
                !(
                  (e.key >= '0' && e.key <= '9') ||
                  ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
                )
              ) {
                e.preventDefault();
              }
            }}
            // Usamos onInput para limitar a entrada de caracteres
            // sem interferir no fluxo de controle do react-hook-form
            onInput={e => {
              // Limita a entrada a 4 dígitos
              if (e.currentTarget.value.length > 4) {
                e.currentTarget.value = e.currentTarget.value.slice(0, 4);
              }
            }}
            placeholder={`0000`}
          />
        )}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </FormGroup>
  );
};

export default GearScoreInput;
