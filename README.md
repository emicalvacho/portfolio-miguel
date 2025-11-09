# 🚀 Portafolio Personal - Miguel José Zambrano López

Portafolio web personal moderno y responsivo desarrollado con React, TypeScript, Vite y TailwindCSS. Este proyecto muestra mis proyectos, experiencia y tecnologías que domino como Desarrollador Web Fullstack.

## ✨ Características

- 🎨 **Diseño moderno y minimalista** con TailwindCSS
- 🌓 **Modo oscuro/claro** con toggle para cambiar entre temas
- 📱 **Totalmente responsivo** para móviles, tablets y desktop
- 🎭 **Animaciones suaves** con Framer Motion
- 🔄 **Integración con GitHub API** para mostrar proyectos dinámicamente
- 📧 **Formulario de contacto** con EmailJS
- ⚡ **Rápido y optimizado** con Vite
- 📝 **TypeScript** para mayor seguridad de tipos

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones para React
- **React Icons** - Íconos populares para React
- **EmailJS** - Servicio para enviar emails desde el frontend
- **GitHub API** - API pública de GitHub para obtener repositorios

## 📁 Estructura del Proyecto

```
portfolio-miguel/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── About.tsx       # Sección "Sobre mí"
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── Header.tsx      # Barra de navegación
│   │   ├── Hero.tsx        # Sección de presentación
│   │   └── Projects.tsx    # Lista de proyectos
│   ├── contexts/           # Contextos de React
│   │   └── ThemeContext.tsx # Contexto para tema oscuro/claro
│   ├── types/              # Tipos TypeScript
│   │   └── github.ts       # Tipos para GitHub API
│   ├── utils/              # Utilidades
│   │   └── githubApi.ts    # Funciones para GitHub API
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── index.html              # HTML principal
├── package.json            # Dependencias del proyecto
├── tailwind.config.js      # Configuración de TailwindCSS
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite
└── README.md               # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para instalar

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/portfolio-miguel.git
cd portfolio-miguel
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar información personal**

Antes de ejecutar el proyecto, necesitas actualizar la siguiente información:

#### En `src/components/Hero.tsx`:
- Actualiza `email`, `linkedin` y `github` con tus datos reales

#### En `src/components/Projects.tsx`:
- Cambia `GITHUB_USERNAME` por tu nombre de usuario de GitHub

#### En `src/components/Contact.tsx`:
- Actualiza `contactInfo` con tus datos de contacto
- (Opcional) Configura EmailJS para el formulario de contacto:
  - Crea una cuenta en [EmailJS](https://www.emailjs.com/)
  - Crea un servicio de email
  - Crea una plantilla de email
  - Actualiza `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` y `EMAILJS_PUBLIC_KEY`

#### En `src/components/About.tsx`:
- Personaliza el texto `aboutText` con tu propia descripción
- Actualiza la lista de tecnologías según tus habilidades

#### En `src/components/Footer.tsx`:
- Actualiza `socialLinks` con tus enlaces sociales

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

5. **Compilar para producción**

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`

## 📦 Despliegue

### Despliegue en GitHub Pages

1. **Actualizar la configuración de Vite**

El archivo `vite.config.ts` ya está configurado con la ruta base `/portfolio-miguel/`. Si tu repositorio tiene un nombre diferente, actualiza esta ruta.

2. **Instalar gh-pages (opcional pero recomendado)**

```bash
npm install --save-dev gh-pages
```

3. **Agregar script de despliegue en `package.json`**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Desplegar**

```bash
npm run deploy
```

5. **Configurar GitHub Pages**

- Ve a la configuración de tu repositorio en GitHub
- En la sección "Pages", selecciona la rama `gh-pages` como fuente
- Tu sitio estará disponible en `https://tu-usuario.github.io/portfolio-miguel/`

### Despliegue en Netlify

1. **Compilar el proyecto**

```bash
npm run build
```

2. **Opción 1: Arrastrar y soltar**

- Ve a [Netlify](https://www.netlify.com/)
- Inicia sesión o crea una cuenta
- Arrastra la carpeta `dist/` a Netlify
- Tu sitio estará disponible inmediatamente

3. **Opción 2: Conectando con GitHub**

- Ve a [Netlify](https://www.netlify.com/)
- Inicia sesión o crea una cuenta
- Haz clic en "New site from Git"
- Conecta tu repositorio de GitHub
- Configura los siguientes valores:
  - **Build command**: `npm run build`
  - **Publish directory**: `dist`
- Haz clic en "Deploy site"

4. **Configurar variables de entorno (si usas EmailJS)**

- En la configuración del sitio en Netlify
- Ve a "Site settings" > "Environment variables"
- Agrega las variables necesarias para EmailJS (si las usas)

### Despliegue en Vercel

1. **Instalar Vercel CLI**

```bash
npm install -g vercel
```

2. **Desplegar**

```bash
vercel
```

O conecta tu repositorio de GitHub directamente desde el dashboard de Vercel.

## 🎨 Personalización

### Colores

Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Personaliza los colores primarios aquí
  }
}
```

### Animaciones

Las animaciones se pueden ajustar en los componentes usando Framer Motion. Revisa la documentación de [Framer Motion](https://www.framer.com/motion/) para más opciones.

### Estilos

Los estilos globales se pueden modificar en `src/index.css`. Los estilos de los componentes se pueden personalizar directamente en los archivos TSX usando clases de TailwindCSS.

## 📝 Componentes Principales

### Header

Barra de navegación superior con menú responsive y toggle de tema. Incluye enlaces a todas las secciones del portafolio.

### Hero

Sección de presentación personal con avatar, nombre, rol, tagline y enlaces sociales. Incluye animaciones de entrada.

### About

Información sobre el desarrollador, experiencia y tecnologías que maneja. Muestra iconos visuales de cada tecnología.

### Projects

Lista dinámica de proyectos obtenidos desde la API de GitHub. Muestra nombre, descripción, lenguaje, estrellas y forks de cada repositorio.

### Contact

Formulario de contacto con integración de EmailJS y enlaces directos a redes sociales.

### Footer

Pie de página con información de copyright y enlaces sociales.

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza la compilación de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 👤 Autor

**Miguel José Zambrano López**

- LinkedIn: [Tu perfil de LinkedIn](https://www.linkedin.com/in/tu-perfil)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- [React](https://react.dev/) - Biblioteca de JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de construcción
- [TailwindCSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Librería de animaciones
- [React Icons](https://react-icons.github.io/react-icons/) - Íconos
- [EmailJS](https://www.emailjs.com/) - Servicio de email

## 📞 Soporte

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de:

- Email: tu-email@ejemplo.com
- LinkedIn: [Tu perfil de LinkedIn](https://www.linkedin.com/in/tu-perfil)
- GitHub: [Abre un issue](https://github.com/tu-usuario/portfolio-miguel/issues)

---

⭐ Si te gustó este proyecto, considera darle una estrella en GitHub!

