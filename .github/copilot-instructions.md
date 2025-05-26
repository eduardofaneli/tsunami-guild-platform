<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TSUNAMI Guild Platform - Copilot Instructions

## Project Overview
This is a modern Single Page Application (SPA) built for the TSUNAMI guild in the MMORPG "Throne and Liberty". The platform serves as a presentation and recruitment tool for the guild.

## Tech Stack
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Styled-components with TypeScript theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Package Manager**: pnpm (always use pnpm instead of npm)

## Code Style Guidelines
- Use TypeScript for all new code
- Follow React functional components with hooks
- Use styled-components for styling with theme system
- Implement smooth animations with framer-motion
- Keep components modular and reusable
- Use semantic HTML elements
- Implement responsive design principles

## Theme System
The project uses a comprehensive theme system located in `src/styles/theme.ts`. Always use theme values instead of hardcoded values:
- Colors: `${props => props.theme.colors.primary}`
- Spacing: `${props => props.theme.spacing.md}`
- Fonts: `${props => props.theme.fonts.heading}`
- Breakpoints: `${props => props.theme.breakpoints.md}`

## Gaming Context
- Focus on MMORPG gaming terminology
- Use guild-related concepts (members, raids, PvP, territories)
- Maintain the epic/fantasy theme throughout
- Consider gaming community best practices

## Performance Guidelines
- Optimize animations for smooth 60fps
- Use lazy loading where appropriate
- Minimize bundle size
- Implement proper SEO practices

## Accessibility
- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain good color contrast ratios

## Component Structure
Components are organized in `/src/components/` with clear separation of concerns:
- Each component should be self-contained
- Use TypeScript interfaces for props
- Implement proper error handling
- Add loading states where appropriate

When making changes, always consider the gaming theme and maintain the modern, professional appearance suitable for a guild recruitment platform.
