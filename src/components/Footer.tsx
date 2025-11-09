import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

/**
 * Componente Footer
 * Pie de página con información de copyright y enlaces sociales
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Información de contacto
  const socialLinks = {
    email: 'tu-email@ejemplo.com', // Cambiar por el email real
    linkedin: 'https://www.linkedin.com/in/tu-perfil', // Cambiar por el LinkedIn real
    github: 'https://github.com/tu-usuario', // Cambiar por el GitHub real
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm flex items-center">
              © {currentYear} Miguel José Zambrano López. Hecho con{' '}
              <FiHeart className="mx-1 text-red-500" /> usando React y
              TailwindCSS
            </p>
          </div>

          {/* Enlaces sociales */}
          <div className="flex space-x-6">
            <a
              href={`mailto:${socialLinks.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

