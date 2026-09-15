# Portfolio Profesional — Abel Sánchez Ramos
> Administrador de Sistemas Junior | Ciberseguridad

Este repositorio aloja el código fuente completo del portfolio profesional de Abel Sánchez Ramos, diseñado específicamente para perfiles de infraestructura, sistemas y ciberseguridad, y optimizado para publicarse en **GitHub Pages**.

---

## 🛠️ Tecnologías y Estándares Utilizados

- **HTML5 Semántico:** Cumplimiento de estándares de accesibilidad WAI-ARIA y estructura para lectores de pantalla.
- **CSS3 Moderno:** Variables nativas (Custom Properties), soporte de dark/light mode con persistencia local, Mobile-First, Flexbox y CSS Grid.
- **Vanilla ES6 JavaScript:** Sin frameworks pesados ni dependencias externas; motor i18n para alternar Español / Inglés y observadores de intersección.
- **SEO Ready:** Metadatos completos Open Graph (LinkedIn), Twitter Cards, canonical tags, `sitemap.xml` y `robots.txt`.

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

### Método Directo (Recomendado):
1. Sube este repositorio a tu cuenta de GitHub (por ejemplo, con el nombre `abelsanchez-it.github.io` o `portfolio`).
2. En GitHub, dirígete a la pestaña **Settings** (Configuración) del repositorio.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** Selecciona `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. En un par de minutos, tu sitio estará accesible públicamente.

---

## 📄 Sustitución del Curriculum Vitae (CV)

El enlace de descarga apunta a:
```text
assets/cv/CV-Abel-Sanchez-Ramos.pdf
```
Para actualizar tu currículum en el futuro, simplemente exporta tu CV actualizado en formato PDF con ese nombre de archivo exacto y colócalo en dicha carpeta.

---

## ➕ Cómo Añadir un Nuevo Proyecto

1. Abre `index.html` y ubica la sección `<section id="projects">`.
2. Duplica un bloque `<article class="project-card">`.
3. Ajusta el título, la descripción técnica, la arquitectura y los enlaces al repositorio.
4. Para mantener la traducción multilingüe, agrega las cadenas correspondientes en `assets/js/i18n.js` bajo las claves de `es` y `en`.
