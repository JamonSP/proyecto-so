/* Archivo: js/counter.js */
(function () {
    const visitasRef = firebase.database().ref('so_vistas_totales');

    visitasRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    });

    window.addEventListener('DOMContentLoaded', () => {
        const counterEl = document.getElementById('visit-counter');

        visitasRef.on('value', (snapshot) => {
            const visitasGlobales = snapshot.val() || 0;
            if (counterEl) counterEl.textContent = visitasGlobales;
        });
    });
})();