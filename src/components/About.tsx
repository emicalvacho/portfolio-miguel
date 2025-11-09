import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

/**
 * Componente About
 * Sección que muestra información sobre el desarrollador y sus tecnologías
 */
const About = () => {
  // Información sobre el desarrollador
  const aboutText = `
    Soy un desarrollador web fullstack con aproximadamente un año de experiencia en el desarrollo de aplicaciones web.
    Mi enfoque principal está en el backend, trabajando con Node.js (TypeScript y Express) y Java (Spring Boot),
    creando APIs robustas y escalables. Actualmente estoy aprendiendo React para expandir mis habilidades en el
    frontend y poder crear experiencias de usuario completas y modernas.
    
    Disfruto resolviendo problemas complejos y creando soluciones simples y elegantes. Mi objetivo es seguir
    aprendiendo y creciendo como desarrollador, contribuyendo a proyectos que generen un impacto positivo.
  `

  // Tecnologías que maneja el desarrollador
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Java', icon: FaJava, color: 'text-orange-500' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
    { name: 'Git', icon: SiGit, color: 'text-red-600' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-gray-200' },
  ]

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
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Título de la sección */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            Sobre mí
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto mb-12"
          />

          {/* Texto descriptivo */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              {aboutText}
            </p>
          </motion.div>

          {/* Tecnologías */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              Tecnologías
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <Icon className={`w-12 h-12 ${tech.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

