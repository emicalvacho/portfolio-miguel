# 🏗️ Arquitectura del Proyecto

Este documento describe la arquitectura y estructura del proyecto de portafolio personal.

## 📐 Estructura General

El proyecto sigue una estructura modular y organizada basada en componentes React con TypeScript.

## 🗂️ Organización de Carpetas

```
src/
├── components/          # Componentes React reutilizables
│   ├── About.tsx       # Sección "Sobre mí"
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── Header.tsx      # Barra de navegación
│   ├── Hero.tsx        # Sección hero/presentación
│   └── Projects.tsx    # Lista de proyectos
├── contexts/           # Contextos de React
│   └── ThemeContext.tsx # Contexto para tema oscuro/claro
├── types/              # Definiciones de tipos TypeScript
│   └── github.ts       # Tipos para GitHub API
├── utils/              # Funciones utilitarias
│   └── githubApi.ts    # Funciones para interactuar con GitHub API
├── App.tsx             # Componente raíz de la aplicación
├── main.tsx            # Punto de entrada de la aplicación
└── index.css           # Estilos globales
```

## 🧩 Componentes Principales

### App.tsx
Componente raíz que contiene toda la estructura de la aplicación. Envuelve todos los componentes en el `ThemeProvider` para manejar el tema global.

### Header
- **Responsabilidades**: Navegación, toggle de tema, menú móvil
- **Estado**: Maneja el estado del menú móvil y el scroll
- **Dependencias**: `ThemeContext`, `framer-motion`

### Hero
- **Responsabilidades**: Presentación personal, enlaces sociales
- **Estado**: No maneja estado propio
- **Dependencias**: `framer-motion`, `react-icons`

### About
- **Responsabilidades**: Mostrar información personal y tecnologías
- **Estado**: No maneja estado propio
- **Dependencias**: `framer-motion`, `react-icons`

### Projects
- **Responsabilidades**: Mostrar proyectos desde GitHub API
- **Estado**: Maneja el estado de carga, proyectos y errores
- **Dependencias**: `githubApi`, `types/github`, `framer-motion`

### Contact
- **Responsabilidades**: Formulario de contacto, enlaces sociales
- **Estado**: Maneja el estado del formulario y el envío
- **Dependencias**: `emailjs/browser`, `framer-motion`

### Footer
- **Responsabilidades**: Información de copyright, enlaces sociales
- **Estado**: No maneja estado propio
- **Dependencias**: `react-icons`

## 🔄 Flujo de Datos

### Tema (Theme)
```
ThemeContext → Todos los componentes que necesitan acceso al tema
```

### Proyectos de GitHub
```
Projects Component → githubApi.fetchGitHubRepos() → GitHub API → Estado del componente
```

### Formulario de Contacto
```
Contact Component → EmailJS → Email del desarrollador
```

## 🎨 Sistema de Estilos

### TailwindCSS
- Framework utility-first para estilos
- Configuración en `tailwind.config.js`
- Modo oscuro mediante clase `dark:`

### Animaciones
- Framer Motion para animaciones suaves
- Animaciones de entrada, hover y scroll

## 🔧 Utilidades

### githubApi.ts
- `fetchGitHubRepos(username)`: Obtiene repositorios de un usuario de GitHub
- `getLanguageColor(language)`: Retorna el color asociado a un lenguaje

## 📦 Gestión de Estado

### Estado Local
- Cada componente maneja su propio estado cuando es necesario
- `useState` para estado simple
- `useEffect` para efectos secundarios

### Estado Global
- `ThemeContext` para el tema de la aplicación
- Persistencia en `localStorage`

## 🔐 Variables de Entorno

El proyecto utiliza variables de entorno para configuración sensible:

- `VITE_GITHUB_USERNAME`: Nombre de usuario de GitHub
- `VITE_EMAILJS_SERVICE_ID`: ID del servicio de EmailJS
- `VITE_EMAILJS_TEMPLATE_ID`: ID de la plantilla de EmailJS
- `VITE_EMAILJS_PUBLIC_KEY`: Clave pública de EmailJS

## 🚀 Optimizaciones

### Rendimiento
- Lazy loading de componentes (si es necesario en el futuro)
- Optimización de imágenes
- Code splitting con Vite

### SEO
- Meta tags en `index.html`
- Estructura semántica HTML
- Títulos y descripciones apropiadas

## 🧪 Testing (Futuro)

Estructura sugerida para testing:
```
src/
├── components/
│   └── __tests__/      # Tests de componentes
├── utils/
│   └── __tests__/      # Tests de utilidades
└── setupTests.ts       # Configuración de tests
```

## 📝 Convenciones de Código

### Nomenclatura
- Componentes: PascalCase (`Header.tsx`)
- Funciones: camelCase (`fetchGitHubRepos`)
- Constantes: UPPER_SNAKE_CASE (`GITHUB_USERNAME`)
- Tipos: PascalCase (`GitHubRepo`)

### Comentarios
- JSDoc para funciones y componentes principales
- Comentarios inline para lógica compleja
- Comentarios en español (coherente con el proyecto)

## 🔄 Flujo de Desarrollo

1. **Desarrollo local**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`
4. **Deploy**: Automático con GitHub Actions o manual con Netlify/Vercel

## 📚 Dependencias Principales

### Producción
- `react`: Biblioteca principal
- `react-dom`: Renderizado de React
- `framer-motion`: Animaciones
- `react-icons`: Íconos
- `@emailjs/browser`: Servicio de email

### Desarrollo
- `vite`: Herramienta de construcción
- `typescript`: Tipado estático
- `tailwindcss`: Estilos
- `eslint`: Linter

## 🎯 Mejoras Futuras

- [ ] Agregar tests unitarios
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar más animaciones
- [ ] Implementar i18n (internacionalización)
- [ ] Agregar blog/sección de artículos
- [ ] Implementar analytics
- [ ] Agregar más filtros para proyectos
- [ ] Implementar búsqueda de proyectos

