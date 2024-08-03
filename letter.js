let currentIndex = 0;

function moveSlides(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    
    currentIndex = (currentIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        moveSlides(1);
    }, 50000);
});
