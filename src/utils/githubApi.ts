import { GitHubRepo, Project } from '../types/github'

/**
 * Utilidades para interactuar con la API de GitHub
 */

/**
 * Obtiene los repositorios públicos de un usuario de GitHub
 * @param username - Nombre de usuario de GitHub
 * @returns Array de proyectos formateados
 */
export async function fetchGitHubRepos(username: string): Promise<Project[]> {
  try {
    // Hacer petición a la API de GitHub
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
    
    if (!response.ok) {
      throw new Error(`Error al obtener repositorios: ${response.statusText}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filtrar y formatear los repositorios
    const projects: Project[] = repos
      .filter((repo) => {
        // Excluir forks y repositorios privados (si es necesario)
        // Puedes agregar más filtros aquí
        return !repo.name.includes('test') // Ejemplo: excluir repos con "test" en el nombre
      })
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Sin descripción',
        url: repo.html_url,
        language: repo.language || 'Otro',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
      }))

    return projects
  } catch (error) {
    console.error('Error al obtener repositorios de GitHub:', error)
    // Retornar array vacío en caso de error
    return []
  }
}

/**
 * Obtiene el color asociado a un lenguaje de programación
 * @param language - Nombre del lenguaje
 * @returns Color en formato hexadecimal
 */
export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Java: '#ed8b00',
    'Java Spring': '#6db33f',
    Python: '#3776ab',
    React: '#61dafb',
    HTML: '#e34c26',
    CSS: '#1572b6',
    'Node.js': '#339933',
    Express: '#000000',
    'Spring Boot': '#6db33f',
    Other: '#6b7280',
  }

  return colors[language] || colors.Other
}

