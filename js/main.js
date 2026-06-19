/* Archivo: js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    RenderEngine.inyectarContenido();
    ThemeController.init();
    CommentsController.init();
    console.log("Arquitectura inicializada correctamente. Listo para producción.");
});
