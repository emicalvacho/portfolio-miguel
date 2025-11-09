import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './contexts/ThemeContext'

/**
 * Componente principal de la aplicación
 * Contiene todas las secciones del portafolio y maneja el tema global
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header con navegación */}
        <Header />
        
        {/* Sección principal de contenido */}
        <main>
          {/* Hero: Presentación personal */}
          <Hero />
          
          {/* About: Sobre mí */}
          <About />
          
          {/* Projects: Proyectos desde GitHub */}
          <Projects />
          
          {/* Contact: Formulario de contacto */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

