/* Archivo: js/counter.js */
(function () {
    const visitasRef = firebase.database().ref('so_vistas_totales');

    visitasRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    }, (error, committed, snapshot) => {
        if (error) {
            console.error("Firebase Error: No se pudo actualizar el contador. ¿Están las Reglas de Firebase en true?", error);
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        const counterEl = document.getElementById('visit-counter');

        visitasRef.on('value', (snapshot) => {
            const visitasGlobales = snapshot.val() || 0;
            if (counterEl) counterEl.textContent = visitasGlobales;
        });
    });
})();