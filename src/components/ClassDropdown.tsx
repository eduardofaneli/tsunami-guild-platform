import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ChevronDown, Search } from 'lucide-react'
import { commonAssets, getAssetPath, ASSET_TYPES } from '../services/assetService'

// Interface para integração com ApplicationFormData
export interface ClassInfo {
  className?: string; // Tornando o className opcional
  class?: string;     // Adicionando a propriedade class para compatibilidade
  weapon1: string;
  weapon2: string;
}

// Componente para renderizar a imagem da arma com fallback
interface WeaponImageProps {
  src: string;
  alt: string;
}

const WeaponImage: React.FC<WeaponImageProps> = ({ src, alt }) => {
  const [error, setError] = useState(false);
  
  // Cores de armas para fallback
  const weaponColors: Record<string, string> = {
    'Sword': '#e57373',
    'Daggers': '#9575cd',
    'Staff': '#4fc3f7',
    'Wand': '#81c784',
    'Spear': '#ffd54f',
    'Greatsword': '#ff8a65',
    'Longbow': '#7986cb',
    'Crossbow': '#4db6ac'
  };
  
  if (error) {
    const backgroundColor = weaponColors[alt] || '#9e9e9e';
    return (
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          color: 'white',
          borderRadius: '3px'
        }}
        title={alt}
      >
        {alt.charAt(0)}
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
    />
  );
};

interface ClassItem {
  class: string
  weapon1: string
  weapon1_icon_url: string
  weapon2: string
  weapon2_icon_url: string
}

interface ClassDropdownProps {
  value?: ClassInfo | null;
  onChange: (classInfo: ClassInfo | null) => void;
  isSecondary?: boolean;
  error?: string;
}

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`

const DropdownButton = styled.button<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  text-align: left;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 'rgba(255, 76, 76, 0.2)' : 'rgba(76, 154, 255, 0.2)'};
  }
`

const DropdownIcon = styled(ChevronDown)<{ $isOpen: boolean }>`
  width: 18px;
  height: 18px;
  transition: transform ${props => props.theme.transitions.fast};
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  color: ${props => props.theme.colors.text.secondary};
`

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  
  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`

const SearchBox = styled.div`
  position: relative;
  padding: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  sticky: top 0;
  background: ${props => props.theme.colors.background.secondary};
`

const SearchInput = styled.input`
  width: 100%;
  background: rgba(26, 26, 58, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  padding-left: 36px;
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.sm};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`

const SearchIconStyled = styled(Search)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.text.muted};
`

const DropdownItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: background ${props => props.theme.transitions.fast};
  background: ${props => props.$isSelected ? 'rgba(76, 154, 255, 0.1)' : 'transparent'};
  border-left: 3px solid ${props => props.$isSelected ? props.theme.colors.primary : 'transparent'};

  &:hover {
    background: rgba(76, 154, 255, 0.05);
  }
`

const ClassIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.spacing.sm};
`

const WeaponIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  & + & {
    margin-left: -6px;
  }
`

const ClassName = styled.div`
  flex: 1;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
`

const WeaponsInfo = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-left: ${props => props.theme.spacing.sm};
`

const SelectedDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  flex: 1;
`

const EmptySelectionText = styled.span`
  color: ${props => props.theme.colors.text.muted};
`

const NoResults = styled.div`
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.fontSizes.sm};
`

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-top: ${props => props.theme.spacing.xs};
`

const ClassDropdown: React.FC<ClassDropdownProps> = ({ 
  value, 
  onChange, 
  isSecondary = false,
  error 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [classes, setClasses] = useState<ClassItem[]>([])
  const [filteredClasses, setFilteredClasses] = useState<ClassItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null)
  
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Detectar clique fora do dropdown para fechar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Carregar dados do JSON
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(commonAssets.classes())
        if (!response.ok) {
          throw new Error('Falha ao carregar dados de classes')
        }
        const data = await response.json()
        setClasses(data)
        setFilteredClasses(data)
        setIsLoading(false)
        
        // Atualizar a classe selecionada se um valor foi passado
        if (value) {
          // value é do tipo ClassInfo, comparar por className/weapon1/weapon2
          const selectedClass = data.find((c: ClassItem) =>
            c.class === value.className &&
            c.weapon1 === value.weapon1 &&
            c.weapon2 === value.weapon2
          );
          if (selectedClass) {
            setSelectedClass(selectedClass)
          }
        }
      } catch (error) {
        console.error('Erro ao carregar classes:', error)
        setIsLoading(false)
      }
    }

    fetchClasses()
  }, [])

  // Atualizar classes filtradas quando o termo de busca mudar
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredClasses(classes)
    } else {
      const filtered = classes.filter(cls => 
        cls.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.weapon1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.weapon2.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredClasses(filtered)
    }
  }, [searchTerm, classes])
  
  // Atualizar classe selecionada quando o valor mudar externamente
  useEffect(() => {
    if (value) {
      const selectedClass = classes.find(
        c =>
          c.class === value.className &&
          c.weapon1 === value.weapon1 &&
          c.weapon2 === value.weapon2
      );
      if (selectedClass) {
        setSelectedClass(selectedClass);
      }
    } else {
      setSelectedClass(null);
    }
  }, [value, classes]);

  const handleClassSelect = (classItem: ClassItem) => {
    setSelectedClass(classItem);
    onChange({
      className: classItem.class,
      weapon1: classItem.weapon1,
      weapon2: classItem.weapon2,
    });
    setIsOpen(false);
  };

  const handleSelectNone = () => {
    setSelectedClass(null);
    onChange(null);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSearchTerm('')
      setFilteredClasses(classes)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const placeholderText = isSecondary ? 
    "Selecione sua classe secundária (opcional)" : 
    "Selecione sua classe principal"

  if (selectedClass) {
    console.group(`[ClassDropdown] Displaying Selected Class: ${selectedClass.class}`);
    console.log('Raw selectedClass.weapon1_icon_url:', selectedClass.weapon1_icon_url);
    console.log('Generated path for weapon1:', getAssetPath(selectedClass.weapon1_icon_url, ASSET_TYPES.WEAPONS));
    console.log('Raw selectedClass.weapon2_icon_url:', selectedClass.weapon2_icon_url);
    console.log('Generated path for weapon2:', getAssetPath(selectedClass.weapon2_icon_url, ASSET_TYPES.WEAPONS));
    console.groupEnd();
  }


  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        onClick={toggleDropdown}
        $hasError={!!error}
        type="button"
      >
        <SelectedDisplay>
          {selectedClass ? (
            <>
              <ClassIconsContainer>
                <WeaponIcon>
                  <WeaponImage 
                    src={getAssetPath(selectedClass.weapon1_icon_url, ASSET_TYPES.WEAPONS)} 
                    alt={selectedClass.weapon1} 
                  />
                </WeaponIcon>
                <WeaponIcon>
                  <WeaponImage 
                    src={getAssetPath(selectedClass.weapon2_icon_url, ASSET_TYPES.WEAPONS)} 
                    alt={selectedClass.weapon2} 
                  />
                </WeaponIcon>
              </ClassIconsContainer>
              <ClassName>{selectedClass.class}</ClassName>
              <WeaponsInfo>({selectedClass.weapon1} | {selectedClass.weapon2})</WeaponsInfo>
            </>
          ) : !value ? (
            <EmptySelectionText>Nenhuma classe selecionada</EmptySelectionText>
          ) : (
            <EmptySelectionText>{placeholderText}</EmptySelectionText>
          )}
        </SelectedDisplay>
        <DropdownIcon $isOpen={isOpen} />
      </DropdownButton>
      
      <DropdownMenu $isOpen={isOpen}>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Buscar classe..."
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={(e) => e.stopPropagation()}
          />
          <SearchIconStyled />
        </SearchBox>
        
        {isLoading ? (
          <NoResults>Carregando classes...</NoResults>
        ) : filteredClasses.length > 0 ? (
          <>
            {filteredClasses.map((classItem) => (
                
              <DropdownItem 
                key={classItem.class}
                $isSelected={selectedClass?.class === classItem.class}
                onClick={() => handleClassSelect(classItem)}
              >
                <ClassIconsContainer>
                  <WeaponIcon>
                    <WeaponImage 
                      src={getAssetPath(classItem.weapon1_icon_url, ASSET_TYPES.WEAPONS)} 
                      alt={classItem.weapon1} 
                    />
                  </WeaponIcon>
                  <WeaponIcon>
                    <WeaponImage 
                      src={getAssetPath(classItem.weapon2_icon_url, ASSET_TYPES.WEAPONS)} 
                      alt={classItem.weapon2} 
                    />
                  </WeaponIcon>
                </ClassIconsContainer>
                <ClassName>{classItem.class}</ClassName>
                <WeaponsInfo>({classItem.weapon1} | {classItem.weapon2})</WeaponsInfo>
              </DropdownItem>
            ))}
            
            {isSecondary && (
              <DropdownItem 
                $isSelected={!value}
                onClick={handleSelectNone}
              >
                <ClassName>Sem classe secundária</ClassName>
              </DropdownItem>
            )}
          </>
        ) : (
          <NoResults>Nenhuma classe encontrada</NoResults>
        )}
      </DropdownMenu>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DropdownContainer>
  )
}

export default ClassDropdown
