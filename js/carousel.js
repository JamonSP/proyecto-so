/* Archivo: js/carousel.js */
/* Lógica del carrusel de videos */

const CarouselController = {
    init: function() {
        const track = document.getElementById('video-track');
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next-video');
        const prevButton = document.getElementById('prev-video');
        const nav = document.getElementById('carousel-nav');
        const dots = Array.from(nav.children);

        if(slides.length === 0) return;

        let currentSlideIndex = 0;

        const moveToSlide = (track, currentSlide, targetSlide, targetIndex) => {
            track.style.transform = `translateX(-${targetIndex * 100}%)`;
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
            
            dots.forEach(dot => dot.classList.remove('current-indicator'));
            dots[targetIndex].classList.add('current-indicator');

            this.stopVideos();
        };

        nextButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide') || slides[0];
            currentSlideIndex++;
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            moveToSlide(track, currentSlide, slides[currentSlideIndex], currentSlideIndex);
        });

        prevButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide') || slides[0];
            currentSlideIndex--;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            moveToSlide(track, currentSlide, slides[currentSlideIndex], currentSlideIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const currentSlide = track.querySelector('.current-slide');
                currentSlideIndex = index;
                moveToSlide(track, currentSlide, slides[index], currentSlideIndex);
            });
        });
    },

    stopVideos: function() {
        const iframes = document.querySelectorAll('.video-wrapper iframe');
        iframes.forEach(iframe => {
            if (iframe.contentWindow) {
                // Envía el comando de pausa al iframe usando la API de YouTube
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CarouselController.init();
});
