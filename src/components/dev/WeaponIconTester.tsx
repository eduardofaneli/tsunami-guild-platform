import React from 'react';
import styled from 'styled-components';
import { getAssetPath, AssetType } from '../../services/assetService';

const TesterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 15px;
`;

const WeaponsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

const WeaponCard = styled.div`
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeaponIconContainer = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
  background: #222;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeaponImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const WeaponName = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
`;

const StatusBadge = styled.div<{ success: boolean }>`
  background: ${props => props.success ? props.theme.colors.success : props.theme.colors.error};
  color: white;
  padding: 2px 8px;
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-top: 5px;
`;

const StatusInfo = styled.div`
  margin: 15px 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const WeaponIconTester = () => {
  const [weaponStatus, setWeaponStatus] = React.useState<Record<string, boolean>>({});
  
  const weaponTypes = [
    'Sword',
    'Daggers',
    'Staff',
    'Wand',
    'Spear',
    'Greatsword',
    'Longbow',
    'Crossbow'
  ];
  
  const handleImageLoad = (weapon: string) => {
    setWeaponStatus(prev => ({
      ...prev,
      [weapon]: true
    }));
  };
  
  const handleImageError = (weapon: string) => {
    setWeaponStatus(prev => ({
      ...prev,
      [weapon]: false
    }));
  };
  
  const totalWeapons = weaponTypes.length;
  const loadedWeapons = Object.values(weaponStatus).filter(Boolean).length;
  const failedWeapons = Object.values(weaponStatus).filter(status => status === false).length;

  return (
    <TesterContainer>
      <Title>Weapon Icon Tester</Title>
      
      <StatusInfo>
        <div>Total de ícones: {totalWeapons}</div>
        <div>Carregados com sucesso: {loadedWeapons}</div>
        <div>Falhas de carregamento: {failedWeapons}</div>
      </StatusInfo>
      
      <WeaponsGrid>
        {weaponTypes.map((weapon) => (
          <WeaponCard key={weapon}>
            <WeaponIconContainer>
              <WeaponImage 
                src={getAssetPath(`${weapon.toLowerCase()}.webp`, AssetType.WEAPONS)}
                alt={weapon}
                onLoad={() => handleImageLoad(weapon)}
                onError={() => handleImageError(weapon)}
              />
            </WeaponIconContainer>
            <WeaponName>{weapon}</WeaponName>
            {weaponStatus[weapon] !== undefined && (
              <StatusBadge success={weaponStatus[weapon]}>
                {weaponStatus[weapon] ? 'OK' : 'Falhou'}
              </StatusBadge>
            )}
          </WeaponCard>
        ))}
      </WeaponsGrid>
    </TesterContainer>
  );
};

export default WeaponIconTester;
