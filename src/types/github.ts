/**
 * Tipos TypeScript para la API de GitHub
 */

/**
 * Interfaz para un repositorio de GitHub
 */
export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  topics: string[]
}

/**
 * Interfaz para los datos de un proyecto que se mostrarán en el portafolio
 */
export interface Project {
  id: number
  name: string
  description: string
  url: string
  language: string
  stars: number
  forks: number
  topics: string[]
}

