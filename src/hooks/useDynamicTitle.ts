import { useEffect } from 'react'

const useDynamicTitle = () => {
  useEffect(() => {
    const titles = [
      'TSUNAMI Guild - Throne and Liberty',
      'TSUNAMI Guild - Comunidade Gamer',
      'TSUNAMI Guild - PvP Competitivo',
      'TSUNAMI Guild - Junte-se a Nós!',
      'TSUNAMI Guild - Throne and Liberty'
    ]
    
    let currentIndex = 0
    const originalTitle = document.title
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length
      document.title = titles[currentIndex]
    }, 3000)
    
    return () => {
      clearInterval(interval)
      document.title = originalTitle
    }
  }, [])
}

export default useDynamicTitle
