import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: #0f0f23;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
    position: relative;
    
    @media (min-width: 1401px) {
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 15, 35, 0.8);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #4c9aff, #7b68ee);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3a87ff, #6b58ee);
  }

  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Glow effects */
  .glow {
    box-shadow: 0 0 20px rgba(76, 154, 255, 0.3);
  }

  .glow-purple {
    box-shadow: 0 0 20px rgba(123, 104, 238, 0.3);
  }

  /* Melhorias para dispositivos móveis */
  @media (max-width: 768px) {
    * {
      -webkit-tap-highlight-color: rgba(76, 154, 255, 0.3);
    }

    button, a {
      min-height: 44px; /* Tamanho mínimo recomendado para touch */
      cursor: pointer;
    }

    input, textarea, select {
      font-size: 16px; /* Previne zoom no iOS */
    }
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Melhorias para dispositivos com hover limitado */
  @media (hover: none) {
    button:hover, a:hover {
      transform: none;
    }
  }
`

export default GlobalStyles
