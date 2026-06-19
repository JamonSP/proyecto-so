/* Archivo: js/render.js */
// Dios mío que este renderizado por datos funcione a la primera, amén
const RenderEngine = {
    inyectarContenido: function() {
        const cardIntro = document.getElementById('card-intro');
        if (cardIntro) {
            cardIntro.innerHTML = `
                <h2>${pageData.introduccion.titulo}</h2>
                <p>${pageData.introduccion.contenido}</p>
            `;
        }

        const idMap = {
            'desktop': 'card-desktop',
            'mobile': 'card-mobile',
            'server': 'card-server'
        };

        pageData.tipos.forEach(tipo => {
            const cardElement = document.getElementById(idMap[tipo.id]);
            if (cardElement) {
                let listItems = tipo.caracteristicas.map(c => `<li>${c}</li>`).join('');
                cardElement.innerHTML = `
                    <h2>${tipo.titulo}</h2>
                    <p>${tipo.descripcion}</p>
                    <ul>${listItems}</ul>
                `;
            }
        });

        const cardResources = document.getElementById('card-resources');
        if (cardResources) {
            let links = pageData.recursos.enlaces.map(l => `<li><a href="${l.url}" target="_blank">${l.nombre}</a></li>`).join('');
            cardResources.innerHTML = `
                <h2>${pageData.recursos.titulo}</h2>
                <ul>${links}</ul>
            `;
        }

        // Renderizado dinámico de la Galería de Imágenes (Giphy)
        if (pageData.galeria) {
            pageData.galeria.forEach(item => {
                const cardElement = document.getElementById(item.id);
                if (cardElement) {
                    cardElement.innerHTML = `
                        <div class="decorative-img" style="overflow: hidden; position: relative; padding-bottom: 101%; height: 0;">
                            <iframe src="${item.iframeSrc}" width="100%" height="100%" style="position:absolute; top:0; left:0; border:none;" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                    `;
                }
            });
        }
    }
};
