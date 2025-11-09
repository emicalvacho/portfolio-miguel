# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar completamente tu portafolio.

## 📝 Información Personal

### 1. Información Básica

#### Hero Section (`src/components/Hero.tsx`)
```typescript
const developerInfo = {
  name: 'Tu Nombre Completo',
  role: 'Tu Rol Profesional',
  tagline: 'Tu frase o tagline personal',
  email: 'tu-email@ejemplo.com',
  linkedin: 'https://www.linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
}
```

### 2. Sobre Mí

#### About Section (`src/components/About.tsx`)
```typescript
const aboutText = `
  Tu texto personal aquí. Cuenta tu historia, experiencia,
  y lo que te apasiona del desarrollo.
`
```

#### Tecnologías
Agrega o elimina tecnologías en el array `technologies`:
```typescript
const technologies = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  // Agrega más tecnologías aquí
]
```

### 3. Proyectos

#### GitHub Username (`src/components/Projects.tsx`)
```typescript
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'tu-usuario-github'
```

O usa variables de entorno en `.env`:
```bash
VITE_GITHUB_USERNAME=tu-usuario-github
```

### 4. Contacto

#### Información de Contacto (`src/components/Contact.tsx`)
```typescript
const contactInfo = {
  email: 'tu-email@ejemplo.com',
  linkedin: 'https://www.linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
}
```

#### EmailJS (Opcional)
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'tu_service_id'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'tu_template_id'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'tu_public_key'
```

### 5. Footer

#### Enlaces Sociales (`src/components/Footer.tsx`)
```typescript
const socialLinks = {
  email: 'tu-email@ejemplo.com',
  linkedin: 'https://www.linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
}
```

## 🎨 Personalización Visual

### Colores

#### Color Principal (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... más tonos
    500: '#3b82f6', // Color principal
    600: '#2563eb', // Color hover
    // ... más tonos
  }
}
```

### Fuentes

#### Agregar Fuente Personalizada (`tailwind.config.js`)
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Tu Fuente', 'sans-serif'],
    }
  }
}
```

Luego importa la fuente en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Tu+Fuente&display=swap" rel="stylesheet">
```

### Animaciones

#### Personalizar Animaciones (`tailwind.config.js`)
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  // Agrega más animaciones
}
```

### Imágenes

#### Avatar/Foto Personal
Reemplaza el avatar en `Hero.tsx`:
```typescript
<img 
  src="/tu-foto.jpg" 
  alt="Tu nombre" 
  className="w-32 h-32 rounded-full"
/>
```

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env`:
```bash
VITE_GITHUB_USERNAME=tu-usuario-github
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### GitHub Pages

Actualiza la ruta base en `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repo/', // Cambia esto
})
```

### Meta Tags

Actualiza los meta tags en `index.html`:
```html
<meta name="description" content="Tu descripción personal" />
<meta name="keywords" content="tus, palabras, clave" />
<meta property="og:title" content="Tu Nombre - Tu Rol" />
<meta property="og:description" content="Tu descripción" />
<meta property="og:image" content="/tu-imagen.jpg" />
```

## 📱 Responsive Design

El diseño ya es responsive, pero puedes ajustar:

### Breakpoints (`tailwind.config.js`)
```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

## 🌐 Internacionalización (Futuro)

Para agregar múltiples idiomas en el futuro:

1. Instala `react-i18next`
2. Crea archivos de traducción
3. Configura el provider en `App.tsx`

## 🎯 Mejoras Adicionales

### Agregar Secciones

1. Crea un nuevo componente en `src/components/`
2. Agrega la sección en `App.tsx`
3. Agrega el enlace en `Header.tsx`

### Agregar Filtros de Proyectos

Modifica `Projects.tsx` para agregar filtros por lenguaje o tema.

### Agregar Blog

Crea una sección de blog con artículos sobre desarrollo.

## 📚 Recursos Útiles

- [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## ✅ Checklist de Personalización

- [ ] Actualizar nombre y rol
- [ ] Actualizar información de contacto
- [ ] Configurar GitHub username
- [ ] Personalizar texto "Sobre mí"
- [ ] Actualizar lista de tecnologías
- [ ] Configurar EmailJS (opcional)
- [ ] Personalizar colores
- [ ] Agregar foto/avatar
- [ ] Actualizar meta tags
- [ ] Configurar ruta base para GitHub Pages
- [ ] Probar en diferentes dispositivos
- [ ] Verificar enlaces sociales
- [ ] Probar formulario de contacto

¡Listo para personalizar! 🎨

