# 🚀 Guía de Despliegue en GitHub Pages con Variables de Entorno

Esta guía te mostrará cómo configurar las variables de entorno para desplegar tu portafolio en GitHub Pages.

## 📋 Índice

1. [Cómo Funcionan las Variables de Entorno en Vite](#cómo-funcionan-las-variables-de-entorno-en-vite)
2. [Configurar GitHub Secrets](#configurar-github-secrets)
3. [Configurar el Workflow de GitHub Actions](#configurar-el-workflow-de-github-actions)
4. [Verificar el Despliegue](#verificar-el-despliegue)
5. [Alternativas](#alternativas)

## 🔍 Cómo Funcionan las Variables de Entorno en Vite

### Importante ⚠️

En Vite, las variables de entorno que empiezan con `VITE_` se **compilan directamente en el código JavaScript** durante el build. Esto significa que:

- ✅ **Se incluyen en el archivo final** (`dist/`)
- ✅ **Son visibles en el código fuente** del navegador
- ⚠️ **NO son secretas** - cualquiera puede verlas inspeccionando el código

### Variables que Usamos

- `VITE_EMAILJS_SERVICE_ID` - Service ID de EmailJS (no es secreto)
- `VITE_EMAILJS_TEMPLATE_ID` - Template ID de EmailJS (no es secreto)
- `VITE_EMAILJS_PUBLIC_KEY` - Public Key de EmailJS (está diseñada para ser pública)
- `VITE_GITHUB_USERNAME` - Username de GitHub (no es secreto)

**Nota**: Todas estas variables están diseñadas para ser públicas. EmailJS usa una Public Key específicamente para el frontend, y es segura de exponer.

## 🔐 Configurar GitHub Secrets

### Paso 1: Crear los Secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, ve a **"Secrets and variables"** → **"Actions"**
4. Haz clic en **"New repository secret"**

### Paso 2: Agregar Cada Variable

Crea un secret para cada variable de entorno:

#### 1. VITE_EMAILJS_SERVICE_ID
- **Name**: `VITE_EMAILJS_SERVICE_ID`
- **Value**: Tu Service ID de EmailJS (ej: `service_abc123`)
- Haz clic en **"Add secret"**

#### 2. VITE_EMAILJS_TEMPLATE_ID
- **Name**: `VITE_EMAILJS_TEMPLATE_ID`
- **Value**: Tu Template ID de EmailJS (ej: `template_xyz789`)
- Haz clic en **"Add secret"**

#### 3. VITE_EMAILJS_PUBLIC_KEY
- **Name**: `VITE_EMAILJS_PUBLIC_KEY`
- **Value**: Tu Public Key de EmailJS (ej: `abcdefghijklmnop`)
- Haz clic en **"Add secret"**

#### 4. VITE_GITHUB_USERNAME
- **Name**: `VITE_GITHUB_USERNAME`
- **Value**: Tu username de GitHub (ej: `tu-usuario`)
- Haz clic en **"Add secret"**

### Paso 3: Verificar los Secrets

Deberías ver 4 secrets en la lista:
- ✅ `VITE_EMAILJS_SERVICE_ID`
- ✅ `VITE_EMAILJS_TEMPLATE_ID`
- ✅ `VITE_EMAILJS_PUBLIC_KEY`
- ✅ `VITE_GITHUB_USERNAME`

## ⚙️ Configurar el Workflow de GitHub Actions

El workflow ya está configurado en `.github/workflows/deploy.yml`. Asegúrate de que tenga esta estructura:

```yaml
- name: Build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
    VITE_GITHUB_USERNAME: ${{ secrets.VITE_GITHUB_USERNAME }}
  run: npm run build
```

### Si el workflow no está actualizado

1. El archivo `.github/workflows/deploy.yml` ya está actualizado con las variables de entorno
2. Si necesitas hacer cambios, edita el archivo y haz commit

## 🚀 Desplegar

### Opción 1: Despliegue Automático (Recomendado)

1. **Haz commit y push a la rama `main`**:
   ```bash
   git add .
   git commit -m "Configurar variables de entorno para GitHub Pages"
   git push origin main
   ```

2. **GitHub Actions ejecutará automáticamente**:
   - Irá a **"Actions"** en tu repositorio
   - Verás el workflow ejecutándose
   - Cuando termine, tu sitio estará desplegado

3. **Habilita GitHub Pages** (si no está habilitado):
   - Ve a **"Settings"** → **"Pages"**
   - En **"Source"**, selecciona **"GitHub Actions"**
   - Guarda los cambios

### Opción 2: Despliegue Manual

Si prefieres desplegar manualmente:

1. **Crea un archivo `.env.production`** en la raíz del proyecto:
   ```bash
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   VITE_GITHUB_USERNAME=tu-usuario
   ```

2. **Compila localmente**:
   ```bash
   npm run build
   ```

3. **Sube la carpeta `dist/` a la rama `gh-pages`**:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

   **Nota**: Este método requiere que tengas las variables en tu `.env.production` local.

## ✅ Verificar el Despliegue

### 1. Verificar que el Build Funcionó

1. Ve a la pestaña **"Actions"** en tu repositorio
2. Verifica que el workflow se ejecutó correctamente
3. Revisa los logs para asegurarte de que no hay errores

### 2. Verificar que las Variables Están Incluidas

1. Ve a tu sitio desplegado (ej: `https://tu-usuario.github.io/portfolio-miguel/`)
2. Abre las herramientas de desarrollador (F12)
3. Ve a la pestaña **"Sources"** o **"Network"**
4. Busca el archivo JavaScript principal
5. Busca las variables (deberías ver `VITE_EMAILJS_SERVICE_ID`, etc.)

### 3. Probar el Formulario de Contacto

1. Llena el formulario de contacto
2. Envía un mensaje de prueba
3. Verifica que recibes el email

### 4. Verificar los Proyectos de GitHub

1. Verifica que la sección de proyectos muestra tus repositorios
2. Si no aparecen, verifica que `VITE_GITHUB_USERNAME` sea correcto

## 🔄 Actualizar las Variables

Si necesitas cambiar las variables de entorno:

1. **Actualiza los Secrets en GitHub**:
   - Ve a **"Settings"** → **"Secrets and variables"** → **"Actions"**
   - Edita el secret que necesites cambiar
   - Guarda los cambios

2. **Ejecuta el workflow nuevamente**:
   - Haz un pequeño cambio en el código (ej: un espacio)
   - Haz commit y push
   - O ve a **"Actions"** y haz clic en **"Run workflow"**

## 📝 Alternativas

### Opción 1: Usar Variables Hardcodeadas (No Recomendado)

Si prefieres no usar Secrets, puedes hardcodear las variables directamente en el código:

```typescript
// src/components/Contact.tsx
const EMAILJS_SERVICE_ID = 'tu_service_id_directo'
const EMAILJS_TEMPLATE_ID = 'tu_template_id_directo'
const EMAILJS_PUBLIC_KEY = 'tu_public_key_directo'
```

**⚠️ No recomendado** porque:
- Expone las credenciales en el código
- Dificulta el cambio de credenciales
- No es una buena práctica

### Opción 2: Usar Netlify o Vercel

Si prefieres usar Netlify o Vercel:

#### Netlify
1. Ve a la configuración del sitio en Netlify
2. Ve a **"Environment variables"**
3. Agrega las variables de entorno
4. Las variables se usarán automáticamente en el build

#### Vercel
1. Ve a la configuración del proyecto en Vercel
2. Ve a **"Environment Variables"**
3. Agrega las variables de entorno
4. Las variables se usarán automáticamente en el build

## 🔒 Seguridad

### ¿Son Seguras las Variables de Entorno?

- ✅ **Public Key de EmailJS**: Está diseñada para ser pública
- ✅ **Service ID y Template ID**: No son secretos, pero es mejor no exponerlos directamente en el código
- ✅ **GitHub Username**: No es secreto

### Mejores Prácticas

1. **Usa GitHub Secrets** para las variables de entorno
2. **No subas el archivo `.env`** a GitHub (ya está en `.gitignore`)
3. **Revisa regularmente** tus credenciales de EmailJS
4. **Usa límites de rate limiting** en EmailJS para prevenir spam

## 🆘 Solución de Problemas

### Las variables no se están usando

1. Verifica que los Secrets estén configurados correctamente
2. Verifica que el workflow tenga las variables en el paso de Build
3. Verifica que los nombres de las variables coincidan exactamente

### El build falla

1. Revisa los logs del workflow en GitHub Actions
2. Verifica que todas las variables estén configuradas
3. Verifica que no haya errores de sintaxis en el workflow

### El formulario no funciona en producción

1. Verifica que las variables estén incluidas en el build
2. Verifica que los valores sean correctos
3. Revisa la consola del navegador para ver errores

## 📚 Recursos

- [Documentación de Vite - Variables de Entorno](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [GitHub Actions](https://docs.github.com/en/actions)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

## ✅ Checklist

- [ ] Secrets configurados en GitHub
- [ ] Workflow actualizado con las variables de entorno
- [ ] Build ejecutado correctamente
- [ ] Sitio desplegado y funcionando
- [ ] Formulario de contacto funcionando
- [ ] Proyectos de GitHub mostrándose correctamente

¡Listo! Tu portafolio debería estar desplegado con las variables de entorno configuradas correctamente. 🎉

