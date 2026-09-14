// ===== PROMOCIONES: Animación de scroll =====

function initPromoScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('promo-visible');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.promo-card').forEach(card => {
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', initPromoScrollAnimation);
