let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda de slide a cada 4 segundos
}
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open');
        menu.classList.toggle('show');
        header.classList.toggle('menu-open');
    });

    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            menu.classList.remove('show');
            header.classList.remove('menu-open');
        });
    });
});