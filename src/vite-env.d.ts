/// <reference types="vite/client" />

/**
 * Definiciones de tipos para variables de entorno
 */
interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME?: string
  readonly VITE_EMAILJS_SERVICE_ID?: string
  readonly VITE_EMAILJS_TEMPLATE_ID?: string
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

