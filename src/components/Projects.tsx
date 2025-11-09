import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi'
import { fetchGitHubRepos, getLanguageColor } from '../utils/githubApi'
import { Project } from '../types/github'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiSpringboot,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

/**
 * Componente Projects
 * Muestra los proyectos del desarrollador obtenidos desde la API de GitHub
 */
const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Nombre de usuario de GitHub (cambiar por el usuario real)
  // Puedes usar una variable de entorno o definirla directamente
  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'tu-usuario-github' // ⚠️ CAMBIAR ESTO

  useEffect(() => {
    // Obtener proyectos de GitHub al cargar el componente
    const loadProjects = async () => {
      try {
        setLoading(true)
        const repos = await fetchGitHubRepos(GITHUB_USERNAME)
        setProjects(repos)
        setError(null)
      } catch (err) {
        setError('No se pudieron cargar los proyectos. Por favor, verifica el nombre de usuario de GitHub.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  /**
   * Obtiene el ícono correspondiente al lenguaje del proyecto
   */
  const getLanguageIcon = (language: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      JavaScript: SiJavascript,
      TypeScript: SiTypescript,
      Java: FaJava,
      'Spring Boot': SiSpringboot,
      React: SiReact,
      'Node.js': SiNodedotjs,
      HTML: SiHtml5,
      CSS: SiCss3,
    }

    return iconMap[language] || SiGithub
  }

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Título de la sección */}
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            Proyectos
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="w-24 h-1 bg-primary-600 mx-auto mb-12"
          />

          {/* Estado de carga */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando proyectos...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Por favor, actualiza la variable GITHUB_USERNAME en el archivo Projects.tsx
              </p>
            </div>
          )}

          {/* Lista de proyectos */}
          {!loading && !error && projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No se encontraron proyectos públicos.
              </p>
            </div>
          )}

          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                const LanguageIcon = getLanguageIcon(project.language)
                const languageColor = getLanguageColor(project.language)

                return (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    {/* Header de la tarjeta */}
                    <div className="p-6">
                      {/* Nombre y lenguaje */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                          {project.name}
                        </h3>
                        {LanguageIcon && (
                          <LanguageIcon
                            className="w-6 h-6 flex-shrink-0 ml-2"
                            style={{ color: languageColor }}
                          />
                        )}
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Lenguaje y estadísticas */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <span
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: languageColor }}
                            />
                            {project.language}
                          </div>
                          <div className="flex items-center">
                            <FiStar className="w-4 h-4 mr-1" />
                            {project.stars}
                          </div>
                          <div className="flex items-center">
                            <FiGitBranch className="w-4 h-4 mr-1" />
                            {project.forks}
                          </div>
                        </div>
                      </div>

                      {/* Tags/Topics */}
                      {project.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Botones de acción */}
                      <div className="flex space-x-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                        >
                          <FiGithub className="w-4 h-4 mr-2" />
                          Ver código
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

