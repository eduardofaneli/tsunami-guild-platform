import React from 'react';
import styled from 'styled-components';
import AssetDebugger from './AssetDebugger';
import WeaponIconTester from './WeaponIconTester';

const DebugPageContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.background.primary};
  min-height: 100vh;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.heading};
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin: 30px 0 15px;
  font-family: ${props => props.theme.fonts.heading};
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
`;

const Nav = styled.nav`
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.2s;
  
  &:hover {
    background: rgba(76, 154, 255, 0.1);
  }
`;

const DebugPage: React.FC = () => {
  return (
    <DebugPageContainer>
      <Title>TSUNAMI Guild - Página de Debug</Title>
      
      <Nav>
        <NavLink href="/">← Voltar para a página principal</NavLink>
      </Nav>
      
      <Subtitle>Ferramentas de Desenvolvimento</Subtitle>
      
      <Section>
        <Subtitle>Asset Debugger</Subtitle>
        <p>Esta ferramenta mostra informações sobre os caminhos de assets e ajuda a depurar problemas de carregamento.</p>
        <AssetDebugger />
      </Section>
      
      <Section>
        <Subtitle>Weapon Icon Tester</Subtitle>
        <p>Esta ferramenta testa o carregamento de todos os ícones de armas.</p>
        <WeaponIconTester />
      </Section>
    </DebugPageContainer>
  );
};

export default DebugPage;
