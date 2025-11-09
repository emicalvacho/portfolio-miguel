import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

/**
 * Componente Contact
 * Formulario de contacto con integración de EmailJS y enlaces sociales
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Configuración de EmailJS
  // ⚠️ IMPORTANTE: Configurar estos valores después de crear una cuenta en EmailJS
  // Puedes usar variables de entorno o definirlas directamente
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'tu_service_id'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'tu_template_id'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'tu_public_key'

  // Verificar si EmailJS está configurado correctamente
  // Los valores deben existir y no ser los valores por defecto
  const isEmailJSConfigured = 
    EMAILJS_SERVICE_ID && 
    EMAILJS_TEMPLATE_ID && 
    EMAILJS_PUBLIC_KEY &&
    EMAILJS_SERVICE_ID.trim() !== '' &&
    EMAILJS_TEMPLATE_ID.trim() !== '' &&
    EMAILJS_PUBLIC_KEY.trim() !== '' &&
    EMAILJS_SERVICE_ID !== 'tu_service_id' &&
    EMAILJS_TEMPLATE_ID !== 'tu_template_id' &&
    EMAILJS_PUBLIC_KEY !== 'tu_public_key'

  // Información de contacto
  const contactInfo = {
    email: 'tu-email@ejemplo.com', // Cambiar por el email real
    linkedin: 'https://www.linkedin.com/in/tu-perfil', // Cambiar por el LinkedIn real
    github: 'https://github.com/tu-usuario', // Cambiar por el GitHub real
  }

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Verificar que las credenciales de EmailJS estén configuradas
      if (!isEmailJSConfigured) {
        // Simulación de envío si EmailJS no está configurado
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        alert(
          'Mensaje enviado (simulación). Por favor, configura EmailJS para habilitar el envío real.'
        )
        return
      }

      // Envío real con EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Miguel Zambrano', // Nombre del destinatario
        reply_to: formData.email,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error: any) {
      // Solo loguear errores en desarrollo para debugging
      if (import.meta.env.DEV) {
        console.error('Error al enviar el formulario:', error)
      }
      
      setSubmitStatus('error')
      
      // Mostrar mensaje de error al usuario
      const errorMessage = error?.text || error?.message || 'Error desconocido'
      
      // Solo mostrar alert con detalles en desarrollo
      if (import.meta.env.DEV) {
        alert(
          `Error al enviar el mensaje: ${errorMessage}\n\n` +
          `Asegúrate de que la configuración de EmailJS sea correcta.`
        )
      }
    } finally {
      setIsSubmitting(false)
    }
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
      id="contact"
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Título de la sección */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            Contacto
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                ¡Hablemos!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Si tienes un proyecto en mente o simplemente quieres conectarte,
                no dudes en contactarme. Estoy abierto a nuevas oportunidades y
                colaboraciones.
              </p>

              {/* Enlaces sociales */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiMail className="w-5 h-5 mr-3" />
                  <span>{contactInfo.email}</span>
                </motion.a>

                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5 mr-3" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiGithub className="w-5 h-5 mr-3" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Campo Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Campo Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>

                {/* Mensaje de estado */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                  </div>
                )}

                {/* Botón de enviar */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
