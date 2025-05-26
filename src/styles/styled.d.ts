import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      accent: string
      background: {
        primary: string
        secondary: string
        tertiary: string
        card: string
      }
      text: {
        primary: string
        secondary: string
        muted: string
      }
      border: string
      success: string
      warning: string
      error: string
    }
    fonts: {
      heading: string
      body: string
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    borderRadius: {
      sm: string
      md: string
      lg: string
      xl: string
      full: string
    }
    shadows: {
      sm: string
      md: string
      lg: string
      xl: string
      glow: string
      glowPurple: string
    }
    transitions: {
      fast: string
      normal: string
      slow: string
    }
  }
}
