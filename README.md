# 💻 Sistemas Operativos - Organización del Computador

Este proyecto es una plataforma web modular, profesional y académicamente orientada sobre **Sistemas Operativos**, desarrollada bajo el principio de **Separation of Concerns (Separación de Conceptos)** y una arquitectura **Data-Driven UI**.

## 🏗️ Arquitectura del Proyecto

El desarrollo está rigurosamente organizado para facilitar su escalabilidad y entendimiento académico. Toda la estructura, los estilos y la funcionalidad se encuentran aislados en sus respectivas capas:

```text
📁 proyecto-so-v2/
├── 📄 README.md         (Documentación técnica del proyecto)
├── 📄 index.html        (Esqueleto semántico y contenedores vacíos)
├── 📁 css/              (Estilos Modulares)
│   ├── 📄 base.css      (Variables globales y tipografía)
│   ├── 📄 theme.css     (Esquemas Modo Claro/Oscuro)
│   ├── 📄 layout.css    (Grid/Flexbox y footer diagonal)
│   ├── 📄 cards.css     (Clean UI para tarjetas)
│   ├── 📄 animations.css(Transiciones y estados de foco)
│   ├── 📄 stats-card.css(Diseño único para la tarjeta de carrusel)
│   └── 📄 responsive.css(Adaptabilidad a dispositivos)
└── 📁 js/               (Lógica Desacoplada)
    ├── 📄 content.js    (Base de datos local simulada en JS puro)
    ├── 📄 render.js     (Inyección del DOM Data-Driven)
    ├── 📄 theme.js      (Controlador del tema y persistencia)
    ├── 📄 counter.js    (Lógica del contador de visitas)
    ├── 📄 comments.js   (Procesamiento y sanitización de formulario)
    ├── 📄 carousel.js   (Controlador del carrusel y API de YouTube)
    └── 📄 main.js       (Entry point centralizado)
```

### 📄 Capa de Estructura (HTML)
- `index.html`: El esqueleto semántico de la página. Está completamente desacoplado del contenido teórico. Define únicamente los contenedores vacíos que serán rellenados de forma dinámica.

### 🎨 Capa de Estilos (CSS Modular)
Ubicados en la carpeta `/css`:
- `base.css`: Tipografía principal (fuente *Poppins*) y variables globales (colores primarios, radios).
- `theme.css`: Definición y control de paletas de color para el **Modo Claro y Oscuro**.
- `layout.css`: Sistema de grilla (Grid), contenedores principales y disposición del pie de página.
- `cards.css`: Aspecto visual de las tarjetas estándar (*Clean UI* con bordes superiores luminosos).
- `animations.css`: Transiciones globales, micro-interacciones al hacer *hover*, y keyframes de los formularios.
- `stats-card.css`: Hoja de estilos con diseño único para la tarjeta destacada de "Estadísticas y Medios" (Carrusel).
- `responsive.css`: Adaptabilidad a diferentes tamaños de pantalla (dispositivos móviles y tablets).

### ⚙️ Capa Lógica y de Datos (Vanilla JS)
Ubicados en la carpeta `/js`:
- `content.js`: Archivo con formato de objeto JSON que alberga toda la teoría académica de SO.
- `render.js`: Motor que lee los datos de `content.js` y los inyecta dinámicamente en el DOM de `index.html`.
- `theme.js`: Alternador interactivo entre los modos visuales con persistencia en el navegador.
- `counter.js`: Sistema de auto-incremento de visitas totales usando `LocalStorage`.
- `comments.js`: Sistema de recolección de feedback, sanitización de inputs (protección XSS básica) y renderizado en minitarjetas.
- `carousel.js`: Controlador del carrusel de videos de YouTube, deslizando en base a Flexbox y pausando automáticamente los videos mediante la API `postMessage`.
- `main.js`: *Entry Point* o Script orquestador que inicializa ordenadamente todos los módulos.

## 🚀 Características Destacadas
1. **UI Moderna:** Efectos de elevación, colores sólidos y diseño responsivo.
2. **Data-Driven (Mantenibilidad):** Modificar la información del proyecto solo requiere alterar el texto del archivo `content.js`, protegiendo el HTML de errores de formato humano.
3. **Persistencia en Cliente (LocalStorage):** Toda la información interactiva generada (Visitas, Preferencia de Tema y Comentarios) persiste incluso después de recargar la página.
4. **Carrusel Inteligente:** La integración con el reproductor de YouTube incluye comandos por API para asegurar que los videos se pausen automáticamente al cambiar de pestaña en el carrusel.

## 👥 Uso y Despliegue
Para ver el proyecto en acción, simplemente abre el archivo `index.html` en cualquier navegador web moderno (Edge, Chrome, Firefox, Safari).

---
*Desarrollado para la materia "Organización del Computador". Recuerda actualizar tus datos personales (Nombres y Cédulas) en la parte inferior del archivo `index.html`.*
