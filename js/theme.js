/* Archivo: js/theme.js */
const ThemeController = {
    init: function() {
        const toggleBtn = document.getElementById('checkbox-theme');
        const themeLabel = document.getElementById('theme-label');
        const currentTheme = localStorage.getItem('so_tema_preferido') || 'light';
        
        if (currentTheme === 'dark') {
            document.body.classList.replace('light-mode', 'dark-mode');
            toggleBtn.checked = true;
            themeLabel.textContent = 'Modo Oscuro';
        }

        toggleBtn.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('so_tema_preferido', 'dark');
                themeLabel.textContent = 'Modo Oscuro';
            } else {
                document.body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('so_tema_preferido', 'light');
                themeLabel.textContent = 'Modo Claro';
            }
        });
    }
};
