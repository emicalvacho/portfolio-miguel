import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

/**
 * Tipo para el contexto del tema
 */
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

/**
 * Contexto para manejar el tema claro/oscuro de la aplicación
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Hook personalizado para acceder al contexto del tema
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return context
}

/**
 * Proveedor del contexto del tema
 * Maneja el estado del tema y lo persiste en localStorage
 */
interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Obtener el tema del localStorage o usar el preferido del sistema
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme as 'light' | 'dark'
    }
    // Detectar preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Aplicar el tema al documento HTML
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    // Guardar en localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Función para alternar entre tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

