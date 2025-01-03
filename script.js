document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});


document.querySelectorAll('.slider-container').forEach((carousel) => {
    let currentIndex = 0;
    const slider = carousel.querySelector('.slider');
    const items = carousel.querySelectorAll('.item-box');

    function getItemsPerPage() {
        const screenWidth = window.innerWidth;
        return screenWidth <= 768 ? 2 : 5; // 2 for small screens, 5 for large screens
    }

    function moveSlide(direction) {
        const itemsPerPage = getItemsPerPage();
        const slideWidth = items[0].offsetWidth + 20; // Include margin
        const totalItems = items.length;
        const totalSlides = Math.ceil(totalItems / itemsPerPage);

        if (direction === 'right') {
            currentIndex = (currentIndex + 1) % totalSlides; // Wrap around to first slide
        } else {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Wrap around to last slide
        }

        // Move the slider to the correct position
        slider.style.transform = `translateX(-${currentIndex * slideWidth * itemsPerPage}px)`;
    }

    // Attach event listeners for the carousel arrows
    carousel.querySelector('.left-arrow').addEventListener('click', () => moveSlide('left'));
    carousel.querySelector('.right-arrow').addEventListener('click', () => moveSlide('right'));

    // Recalculate on window resize
    window.addEventListener('resize', () => {
        currentIndex = 0;
        slider.style.transform = 'translateX(0)';
    });
});
