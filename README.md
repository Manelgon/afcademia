# AFCacademIA - Landing Page

## 📋 Descripción

Landing page oficial de **AFCacademIA**, una plataforma educativa especializada en automatización con IA para despachos de administración de fincas. El sitio web promociona formación práctica, online y bonificable para automatizar procesos con herramientas como Power Automate, Outlook, Make y otras tecnologías de automatización.

### 🎯 Objetivo del Proyecto

Proporcionar una experiencia web moderna y funcional que permita a los profesionales de administración de fincas:
- Conocer los beneficios de la automatización con IA
- Solicitar clases gratuitas de demostración
- Acceder a información legal y de contacto
- Evaluar las oportunidades de mejora en sus procesos

## ✨ Características Principales

### 🏠 Página Principal (Home)
- **Hero Section**: Presentación impactante con propuesta de valor
- **Beneficios**: Destacar ventajas de la automatización (ahorro de 4-10h/semana, reducción de errores)
- **Acerca de**: Información sobre AFCacademIA y su enfoque
- **Valores**: Principios y metodología de enseñanza
- **Oferta**: Detalles de los cursos y formación disponible
- **Contacto**: Formulario interactivo para solicitar clase gratuita
- **FAQ**: Preguntas frecuentes sobre la formación

### 📄 Páginas Legales
- **Aviso Legal**: Información legal de la empresa
- **Política de Privacidad**: Tratamiento de datos personales
- **Política de Cookies**: Uso de cookies y tecnologías similares
- **Declaración de Accesibilidad**: Compromiso con la accesibilidad web

### 🚀 Funcionalidades Técnicas
- **Formulario de Contacto**: Integración con webhook para captura de leads
- **Navegación Suave**: Scroll automático a secciones específicas
- **Diseño Responsive**: Adaptado para dispositivos móviles y desktop
- **SEO Optimizado**: Estructura semántica y metadatos

## 🛠️ Stack Tecnológico

### Frontend
- **React** (18.2.0) - Biblioteca para construcción de interfaces de usuario
- **React Router DOM** (6.14.2) - Navegación y enrutado
- **Vite** (7.1.7) - Build tool y servidor de desarrollo

### Estilos
- **Tailwind CSS** (3.3.0) - Framework CSS utilitario
- **CSS Personalizado** - Estilos específicos para componentes
- **PostCSS** (8.5.6) - Procesador de CSS
- **Autoprefixer** (10.4.21) - Prefijos automáticos para CSS

### Herramientas de Desarrollo
- **ESLint** (9.36.0) - Linting de código JavaScript/React
- **Vite Plugin React** (5.0.4) - Integración React con Vite

## 📁 Estructura del Proyecto

```
afc-landing/
├── public/                     # Archivos estáticos
│   ├── favicon.webp
│   ├── logo.webp
│   ├── logo2.webp
│   └── vite.svg
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── About.jsx          # Sección "Acerca de"
│   │   ├── Benefits.jsx       # Beneficios de la automatización
│   │   ├── Contact.jsx        # Formulario de contacto
│   │   ├── FAQ.jsx            # Preguntas frecuentes
│   │   ├── Footer.jsx         # Pie de página
│   │   ├── Hero.jsx           # Sección principal
│   │   ├── NavBar.jsx         # Barra de navegación
│   │   ├── Offering.jsx       # Oferta educativa
│   │   └── Values.jsx         # Valores y metodología
│   ├── pages/                 # Páginas de la aplicación
│   │   ├── AvisoLegal.jsx     # Página de aviso legal
│   │   ├── DeclaracionAccesibilidad.jsx # Accesibilidad
│   │   ├── Home.jsx           # Página principal
│   │   ├── PoliticaCookies.jsx # Política de cookies
│   │   └── PoliticaPrivacidad.jsx # Política de privacidad
│   ├── App.jsx                # Componente principal
│   ├── App.css                # Estilos generales
│   ├── index.css              # Estilos base
│   └── main.jsx               # Punto de entrada
├── dist/                      # Build de producción
├── package.json               # Dependencias y scripts
├── tailwind.config.js         # Configuración Tailwind
├── vite.config.js             # Configuración Vite
└── README.md                  # Este archivo
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd afc-landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env.local` en la raíz del proyecto:
```env
VITE_WEBHOOK_URL=https://tu-webhook-url.com/endpoint
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting de código
npm run lint
```

## 🌐 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/` y estarán listos para desplegar en cualquier servidor web estático.

### Variables de Entorno Requeridas

- `VITE_WEBHOOK_URL`: URL del webhook para el procesamiento de formularios de contacto

## 📋 Funcionalidades del Formulario

El formulario de contacto captura la siguiente información:
- **Datos básicos**: Nombre, email, teléfono
- **Información profesional**: Nombre del despacho, número de comunidades gestionadas
- **Intereses**: Qué procesos desea automatizar primero
- **Consentimiento**: Aceptación de política de privacidad

Los datos se envían a un webhook configurado y incluyen:
- Timestamp de envío
- Fuente (AFC Landing Page)
- Todos los campos del formulario

## 🎨 Personalización de Estilos

El proyecto utiliza una combinación de Tailwind CSS y CSS personalizado:

- **Tailwind CSS**: Para utilidades de layout, spacing y responsive design
- **CSS Personalizado**: Para estilos específicos de componentes y animaciones
- **Variables CSS**: Para colores y espaciados consistentes

### Colores Principales
- Azul principal: `#003865`
- Azul secundario: `#2C6DA4`
- Naranja (CTA): `#f97316`

## 🔧 Configuración Avanzada

### Tailwind CSS
El archivo `tailwind.config.js` incluye configuración personalizada para:
- Rutas de contenido
- Colores personalizados
- Breakpoints responsive

### Vite
El archivo `vite.config.js` configura:
- Plugin de React
- Aliases de importación
- Optimizaciones de build

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para la feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit los cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 📞 Contacto y Soporte

Para soporte técnico o consultas sobre el proyecto:
- **Sitio web**: [AFCacademIA](https://tu-dominio.com)
- **Email**: contacto@afcacademia.com

## 📄 Licencia

Este proyecto es propietario de AFCacademIA. Todos los derechos reservados.

---

*Desarrollado con ❤️ para la automatización inteligente de despachos de administración de fincas*
