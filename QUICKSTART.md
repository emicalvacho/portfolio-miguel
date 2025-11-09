# 🚀 Guía de Inicio Rápido

Esta guía te ayudará a configurar y ejecutar el proyecto rápidamente.

## ⚡ Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar información personal (ver sección siguiente)

# 3. Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración Rápida

### 1. Actualizar Información Personal

#### Hero Section (`src/components/Hero.tsx`)
```typescript
const developerInfo = {
  name: 'Miguel José Zambrano López', // ✅ Ya configurado
  role: 'Desarrollador Web Fullstack', // ✅ Ya configurado
  email: 'tu-email@ejemplo.com', // ⚠️ CAMBIAR
  linkedin: 'https://www.linkedin.com/in/tu-perfil', // ⚠️ CAMBIAR
  github: 'https://github.com/tu-usuario', // ⚠️ CAMBIAR
}
```

#### Projects (`src/components/Projects.tsx`)
```typescript
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'tu-usuario-github' // ⚠️ CAMBIAR
```

#### Contact (`src/components/Contact.tsx`)
```typescript
const contactInfo = {
  email: 'tu-email@ejemplo.com', // ⚠️ CAMBIAR
  linkedin: 'https://www.linkedin.com/in/tu-perfil', // ⚠️ CAMBIAR
  github: 'https://github.com/tu-usuario', // ⚠️ CAMBIAR
}
```

#### Footer (`src/components/Footer.tsx`)
```typescript
const socialLinks = {
  email: 'tu-email@ejemplo.com', // ⚠️ CAMBIAR
  linkedin: 'https://www.linkedin.com/in/tu-perfil', // ⚠️ CAMBIAR
  github: 'https://github.com/tu-usuario', // ⚠️ CAMBIAR
}
```

### 2. Configurar EmailJS (Opcional)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla de email
4. Actualiza en `src/components/Contact.tsx`:
```typescript
const EMAILJS_SERVICE_ID = 'tu_service_id'
const EMAILJS_TEMPLATE_ID = 'tu_template_id'
const EMAILJS_PUBLIC_KEY = 'tu_public_key'
```

O usa variables de entorno (recomendado):
```bash
# Crear archivo .env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 3. Personalizar About Section

Edita `src/components/About.tsx` para actualizar:
- Texto de descripción personal
- Lista de tecnologías

## 🎨 Personalización Visual

### Cambiar Colores

Edita `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Cambia estos colores
    500: '#3b82f6', // Color principal
    600: '#2563eb', // Color hover
  }
}
```

### Cambiar Fuentes

Agrega fuentes en `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Tu Fuente', 'sans-serif'],
    }
  }
}
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Desarrollo (http://localhost:5173)
npm run build    # Compilar para producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar linter
```

## 🚀 Despliegue Rápido

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a la rama gh-pages
```

### Netlify
1. Arrastra la carpeta `dist/` a Netlify
2. ¡Listo!

### Vercel
```bash
npm install -g vercel
vercel
```

## ❓ Problemas Comunes

### Los proyectos no se cargan
- Verifica que el nombre de usuario de GitHub sea correcto
- Asegúrate de que el usuario tenga repositorios públicos

### El formulario de contacto no funciona
- Verifica la configuración de EmailJS
- Revisa la consola del navegador para errores

### El tema oscuro no persiste
- Verifica que `localStorage` esté habilitado en tu navegador
- Limpia el caché del navegador

## 📚 Recursos

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de TailwindCSS](https://tailwindcss.com/)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Documentación de EmailJS](https://www.emailjs.com/docs/)

## 🆘 Soporte

Si tienes problemas:
1. Revisa la documentación completa en `README.md`
2. Revisa `ARCHITECTURE.md` para entender la estructura
3. Abre un issue en GitHub

¡Listo para empezar! 🎉

