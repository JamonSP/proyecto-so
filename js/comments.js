/* Archivo: js/comments.js */
const CommentsController = {
    init: function () {
        this.form = document.getElementById('comment-form');
        this.listContainer = document.getElementById('comments-list');
        this.authorInput = document.getElementById('comment-author');
        this.textInput = document.getElementById('comment-text');

        // Toggle Slider elements
        this.toggleBtn = document.getElementById('toggle-comments-btn');
        this.slider = document.getElementById('comments-slider');
        this.showingForm = true;

        // Referencia al nodo de comentarios en Firebase
        this.dbRef = firebase.database().ref('so_lista_comentarios');

        this.listenToComments();
        this.bindEvents();
    },

    bindEvents: function () {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmission();
        });

        // Toggle Logic
        if (this.toggleBtn && this.slider) {
            this.toggleBtn.addEventListener('click', () => {
                this.showingForm = !this.showingForm;
                if (this.showingForm) {
                    this.slider.style.transform = 'translateX(0)';
                    this.toggleBtn.innerHTML = 'Ver Comentarios &#10095;';
                } else {
                    this.slider.style.transform = 'translateX(-50%)';
                    this.toggleBtn.innerHTML = '&#10094; Escribir Comentario';
                }
            });
        }
    },

    sanitize: function (str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    },

    handleSubmission: function () {
        const author = this.sanitize(this.authorInput.value);
        const text = this.sanitize(this.textInput.value);

        if (!author || !text) {
            if (!author) this.triggerError(this.authorInput);
            if (!text) this.triggerError(this.textInput);
            return;
        }

        const newComment = {
            autor: author,
            texto: text,
            fecha: new Date().toLocaleDateString(),
            timestamp: Date.now() // Nos servirá para ordenar correctamente
        };

        // para guardar en firebase
        this.dbRef.push(newComment);
        this.form.reset();
    },

    triggerError: function (element) {
        element.classList.add('error-shake');
        setTimeout(() => element.classList.remove('error-shake'), 400);
    },

    listenToComments: function () {
        // esta parte se encarga de ver los cambios en tiempo real
        this.dbRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (!data) {
                this.listContainer.innerHTML = '<p style="color:#888; font-style:italic;">No hay comentarios aún.</p>';
                return;
            }

            // Esto es para ordenarlo por mas reciente
            const commentsArray = [];
            for (let key in data) {
                commentsArray.push(data[key]);
            }
            commentsArray.sort((a, b) => b.timestamp - a.timestamp);

            // para ver la lista (propuesto por ia)
            this.listContainer.innerHTML = commentsArray.map(c => `
                <div class="comment-item">
                    <div class="comment-meta">
                        <span class="comment-author-name">${c.autor}</span> - ${c.fecha}
                    </div>
                    <div class="comment-content">${c.texto}</div>
                </div>
            `).join('');
        });
    }
};