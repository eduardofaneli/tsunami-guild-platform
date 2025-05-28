import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { commonAssets, getAssetPath, AssetType, getBasePath } from '../../services/assetService';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg};
  font-family: monospace;
  color: white;
  max-width: 800px;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
`;

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  padding-bottom: ${props => props.theme.spacing.xs};
`;

const Label = styled.div`
  flex: 1;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 2;
  word-break: break-all;
`;

const TestImage = styled.div`
  margin-top: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.sm};
  background: #222;
  border: 1px solid #444;
  
  img {
    max-width: 100px;
    display: block;
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  margin-right: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const AssetDebugger: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toISOString());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const refreshPage = () => {
    window.location.reload();
  };
  
  const clearCache = () => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    alert('Cache limpo. Atualizando página...');
    setTimeout(refreshPage, 500);
  };
  
  // Assets para testar
  const assetTests = [
    { name: 'Favicon', path: commonAssets.logo() },
    { name: 'Discord', path: commonAssets.discord() },
    { name: 'Sword', path: getAssetPath('sword.webp', AssetType.WEAPONS) },
    { name: 'Staff', path: getAssetPath('staff.webp', AssetType.WEAPONS) },
    { name: 'Absolute Path', path: getAssetPath('/assets/weapons/spear.webp', AssetType.WEAPONS) }
  ];
  
  return (
    <Container>
      <Title>Asset Path Debugger</Title>
      
      <Button onClick={refreshPage}>Atualizar Página</Button>
      <Button onClick={clearCache}>Limpar Cache</Button>
      
      <Section>
        <SectionTitle>Informações do Ambiente</SectionTitle>
        <InfoRow>
          <Label>Data/Hora:</Label>
          <Value>{currentTime}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Base Path:</Label>
          <Value>{getBasePath()}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Ambiente:</Label>
          <Value>{import.meta.env.MODE}</Value>
        </InfoRow>
        <InfoRow>
          <Label>URL Atual:</Label>
          <Value>{window.location.href}</Value>
        </InfoRow>
      </Section>
      
      <Section>
        <SectionTitle>Testes de Assets</SectionTitle>
        {assetTests.map((asset, index) => (
          <TestImage key={index}>
            <InfoRow>
              <Label>{asset.name}:</Label>
              <Value>{asset.path}</Value>
            </InfoRow>
            <img 
              src={asset.path} 
              alt={asset.name} 
              onError={(e) => {
                console.error(`Erro ao carregar ${asset.name}:`, asset.path);
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.style.padding = '5px';
                e.currentTarget.style.background = '#ffcccc';
                e.currentTarget.style.width = '50px';
                e.currentTarget.style.height = '50px';
              }}
              onLoad={() => console.log(`Carregado com sucesso: ${asset.name}`)}
            />
          </TestImage>
        ))}
      </Section>
    </Container>
  );
};

export default AssetDebugger;
