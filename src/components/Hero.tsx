import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

/**
 * Componente Hero
 * Sección de presentación personal con foto, nombre, rol y enlaces sociales
 */
const Hero = () => {
  // Información personal del desarrollador
  const developerInfo = {
    name: 'Miguel José Zambrano López',
    role: 'Desarrollador Web Fullstack',
    tagline: 'Desarrollador web enfocado en crear soluciones simples y elegantes',
    email: 'tu-email@ejemplo.com', // Cambiar por el email real
    linkedin: 'https://www.linkedin.com/in/tu-perfil', // Cambiar por el LinkedIn real
    github: 'https://github.com/tu-usuario', // Cambiar por el GitHub real
  }

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar/Foto */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg">
                  <img src="/src/assets/pixel-miguel.png" alt="Miguel José Zambrano López" className="w-32 h-32 md:w-40 md:h-40 rounded-full" />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* Nombre */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {developerInfo.name}
          </motion.h1>

          {/* Rol */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-6 font-semibold"
          >
            {developerInfo.role}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {developerInfo.tagline}
          </motion.p>

          {/* Botones sociales */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={`mailto:${developerInfo.email}`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Botón de scroll hacia abajo */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.a
              href="#about"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

