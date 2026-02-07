document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(element => {
        observer.observe(element);
    });

    // Coffee Calculator Logic
    const inputTazas = document.querySelector('#tazas');
    if (inputTazas) {
        const cafeSpan = document.querySelector('#gramos-cafe');
        const aguaSpan = document.querySelector('#ml-agua');

        const calcular = () => {
            const tazas = parseInt(inputTazas.value) || 0;
            const agua = tazas * 250; // 250ml per cup
            const cafe = agua / 16;   // Ratio 1:16

            cafeSpan.textContent = cafe.toFixed(1);
            aguaSpan.textContent = agua;
        };

        inputTazas.addEventListener('input', calcular);
        calcular(); // Initial calculation
    }
});
